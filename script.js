class User {
    constructor(data) {
        this.data = data;
    }

    edit(obj) {
        this.data = { ...this.data, ...obj };
    }

    get() {
        return this.data;
    }
}
  
class Contacts {
    constructor() {
        this.data = [];
    }

    add(data) {
        const user = new User(data);
        this.data.push(user);
        this.storage = this.data.map((user) => user.get());
    }

    edit(id, obj) {
        const userIndex = this.data.findIndex((user) => user.data.id === +id);
        if (userIndex !== -1) {
            const user = this.data[userIndex];
            user.data = { ...user.data, ...obj };
            this.storage = this.data.map((user) => user.get());
        }
    }

    remove(id) {
        this.data = this.data.filter((user) => user.data.id !== +id);
    }

    get() {
        return this.data.map((user) => user.get());
    }
}
  
class ContactsApp extends Contacts {
    constructor(containerSelector) {
        super();
        this.app = document.querySelector(containerSelector);
        this._storageExpirationKey = 'storageExpiration';
        this.render();
    }

    get storage() {
        const storageExpiration = localStorage.getItem(this._storageExpirationKey);
        if (storageExpiration && Date.now() < Number(storageExpiration)) {
            const contactsJson = localStorage.getItem('contacts');
            return JSON.parse(contactsJson);
        } else {
            this.clearStorage();
            return [];
        }
    }

    set storage(data) {
        localStorage.setItem('contacts', JSON.stringify(data));
        const expirationDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000); // срок действия - 10 дней
        document.cookie = `${this._storageExpirationKey}=${expirationDate.toUTCString()}`;
        localStorage.setItem(this._storageExpirationKey, expirationDate.getTime());
    }

    clearStorage() {
        localStorage.removeItem('contacts');
        localStorage.removeItem(this._storageExpirationKey);
        document.cookie = `${this._storageExpirationKey}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    }

    render() {
        const form = document.createElement("form");
        const nameInput = document.createElement("input");
        nameInput.setAttribute("placeholder", "Name");
        const emailInput = document.createElement("input");
        emailInput.setAttribute("placeholder", "Email");
        const addressInput = document.createElement("input");
        addressInput.setAttribute("placeholder", "Address");
        const phoneInput = document.createElement("input");
        phoneInput.setAttribute("placeholder", "Phone");
        const addButton = document.createElement("button");
        addButton.textContent = "Add";
        addButton.addEventListener("click", this.onAdd.bind(this));
        form.append(nameInput, emailInput, addressInput, phoneInput, addButton);
        this.app.append(form);
    }

    onAdd(event) {
        event.preventDefault();
        const form = event.target.form;
        const name = form.elements[0].value;
        const email = form.elements[1].value;
        const address = form.elements[2].value;
        const phone = form.elements[3].value;
        const id = Date.now();
        const data = { id, name, email, address, phone };
        this.add(data);
        this.get();
        form.reset();
    }

    onEdit(event) {
        console.log(this.data);
        const id = event.target.dataset.id;
        const user = this.data.find((user) => user.data.id === +id);
        console.log(user);
        if (user) {
            const form = this.app.querySelector("form");
            const nameInput = form.elements[0];
            const emailInput = form.elements[1];
            const addressInput = form.elements[2];
            const phoneInput = form.elements[3];
            nameInput.value = user.data.name;
            emailInput.value = user.data.email;
            addressInput.value = user.data.address;
            phoneInput.value = user.data.phone;
            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.dataset.id = id;
            saveButton.addEventListener("click", this.onSave.bind(this));
            const editButton = event.target;
            editButton.removeEventListener("click", this.onEdit.bind(this));
            editButton.replaceWith(saveButton);
        }
    }

    onSave(event) {
        event.preventDefault();
        const saveButton = event.target;
        const id = saveButton.dataset.id;
        const form = saveButton.closest("form");
        const name = form && form.elements[0] ? form.elements[0].value : '';
        const email = form && form.elements[1] ? form.elements[1].value : '';
        const address = form && form.elements[2] ? form.elements[2].value : '';
        const phone = form && form.elements[3] ? form.elements[3].value : '';
        const data = { id, name, email, address, phone };
        const user = this.data.find((user) => user.data.id === +id);
        if (user) {
            user.edit(data);
            const item = saveButton.closest('li');
            const spans = item.querySelectorAll('span');
            for (const span of spans) {
                const [prop, _] = span.textContent.split(': ');
                span.textContent = `${prop}: ${data[prop]}`;
            }
        }
        this.storage = this.data.map((user) => user.get());
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.dataset.id = id;
        editButton.addEventListener("click", this.onEdit.bind(this));
        saveButton.removeEventListener("click", this.onSave.bind(this));
        saveButton.replaceWith(editButton);
    }

    onRemove(event) {
        const id = event.target.dataset.id;
        this.remove(id);
        this.get();
    }

    get() {
        const list = document.createElement("ul");
        this.app.querySelector("ul")?.remove();
        this.data.forEach((user) => {
            const item = document.createElement("li");
            for (const [prop, value] of Object.entries(user.get())) {
                if (prop !== 'id') {
                  const span = document.createElement("span");
                  span.textContent = `${prop}: ${value}`;
                  item.append(span);
                }
            } 
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.dataset.id = user.get().id;
            editButton.addEventListener("click", this.onEdit.bind(this));
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.dataset.id = user.get().id;
            removeButton.addEventListener("click", this.onRemove.bind(this));
            item.append(editButton, removeButton);
            list.append(item);
        });

        this.app.append(list);
    }

}
    
const app = new ContactsApp(".contacts");
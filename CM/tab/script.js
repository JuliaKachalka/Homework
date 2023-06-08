const tabs = (selector) => {
    let containers = document.querySelectorAll(selector);
    
    const tabController = (tabContainer) => {
        let buttons = tabContainer.querySelector('.buttons');
        if (!buttons) return;

        let contents = tabContainer.querySelector('.content');
        if (!contents) return;

        const contentChange = (index) => {
            [...contents.children].forEach((item,i) => {
                if (i === index) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        const addTab = (counter, button) => {
            let newTab = document.createElement('li');
            newTab.innerText = `Tab ${counter}`;

            let newContent = document.createElement('li');
            newContent.innerText = prompt();

            contents.append(newContent);
            buttons.insertBefore(newTab, button);
        }

        const buttonsHandler = (event) => {
            let button = event.target;

            console.log(event);
            
            if (button.tagName === 'LI') {
                [...buttons.children].forEach((elem, i) => {
                    if (elem === button) {
                        if (elem.classList.contains('add')) {
                            addTab(buttons.children.length, elem);
                        } else {
                            elem.classList.add('active');
                            contentChange(i);
                        }
                    } else {
                        elem.classList.remove('active');
                    }
                });
            } 
        }

        buttons.addEventListener ('click', buttonsHandler)

    }

    [...containers].forEach(container => tabController(container));
}

tabs('.tab');

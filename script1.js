function DOMHelper() {
    this.create = function(tagName) {
      return document.createElement(tagName);
    };
  
    this.attr = function(element, name, value) {
      if (value === undefined) {
        return element.getAttribute(name);
      } else {
        element.setAttribute(name, value);
      }
    };
  
    this.html = function(element, value) {
      if (value === undefined) {
        return element.innerHTML;
      } else {
        element.innerHTML = value;
      }
    };
  
    this.search = function(element, selector) {
      return element.querySelectorAll(selector);
    };
  
    this.addClass = function(element, className) {
      element.classList.add(className);
    };
  
    this.removeClass = function(element, className) {
      element.classList.remove(className);
    };
  
    this.toggleClass = function(element, className) {
      element.classList.toggle(className);
    };
  
    this.hasClass = function(element, className) {
      return element.classList.contains(className);
    };
  
    this.append = function(element, newElement, beforeElement) {
      if (beforeElement === undefined) {
        element.appendChild(newElement);
      } else {
        element.insertBefore(newElement, beforeElement);
      }
    };
  
    this.on = function(element, eventName, funcName) {
      element.addEventListener(eventName, funcName.bind(this));
    };
}
  
let domHelper = new DOMHelper();

let newDiv = domHelper.create('div');

domHelper.attr(newDiv, 'id', 'myDiv');

domHelper.html(newDiv, '<h1>Добро пожаловать!</h1>');

domHelper.addClass(newDiv, 'myClass');

let elements = domHelper.search(document, '.someClass');

let parentDiv = document.getElementById('parentDiv');
if (parentDiv !== null) {
  domHelper.append(parentDiv, newDiv);
} else {
  console.error('Элемент с идентификатором «parentDiv» не найден');
}

domHelper.on(newDiv, 'click', function(event) {
  console.log('Div был нажат!');
});
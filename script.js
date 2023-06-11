let Auto = function (brand, model, number) {
    this.brand = brand;
    this.model = model;
    this.number = number;
    this.engineOn = false;
    
    Auto.prototype.engineOnOff = function() {
        this.engineOnOff = prompt('Ваша машина заведена?');
        this.engineOn = !this.engineOn;
        if(this.engineOn){
            this.engineOn === 'да';
            console.log('Двигатель включен!');
        }else{
            console.log('Двигатель выключен!');
        }

    };

    this.transmission = function () {
        transmission = prompt('Включена передача: вперед, назад, нейтральная?');
        if(this.engineOn && (transmission === 'вперед' || transmission === 'назад' || transmission === 'нейтральная')){
            this.transmission = transmission;
            console.log(`Включена передача: ${this.transmission}.`);
        }else{
            console.log('Двигатель выключен!');
        }
    };
    this.sped = function () {
        sped = +prompt('Введите скорость автомобиля!');
        if(this.engineOn && this.transmission === 'вперед'){
            this.sped = sped;
            console.log(`Автомобиль движется вперед со скоростью ${this.sped} км/ч.`);
        }else if(this.engineOn && this.transmission === 'назад'){
            this.sped = sped;
            console.log(`Автомобиль движется назад со скоростью ${this.sped} км/ч.`);
        }else{
            console.log(`Машина выключена или включена нейтральная передача!`);
        }
    };

    this.distance = function () {
        if(this.engineOn && this.transmission === 'вперед'){
            this.distance = sped;
            console.log(`Автомобиль прошел дистанцию ${this.distance} км.`);
        }else if(this.engineOn && this.transmission === 'назад'){
            this.distance = sped;
            console.log(`Автомобиль прошел дистанцию ${this.distance} км.`);
        }else{
            console.log(`Машина выключена или включена нейтральная передача!`);
        }
    };

    this.braking = function () {
    this.g = 9.81; //ускорение силы тяжести
    this.ks = +prompt('Введите коэффициент сцепления автомобиля с дорогой: 0.7(сухой асфальт), 0.4(мокрый асфальт), 0.2(укатанный снег), 0.1(обледенение)!')
        this.braking = this.result;
        switch (this.ks) {
            case 0.7:
                this.result = (this.sped * 2) / (2 * this.g * this.ks);
                console.log(`Тормозной путь автомобиля ${this.result} м/сек.`);
            break;
            case 0.4:
                this.result = (this.sped * 2) / (2 * this.g * this.ks);
                console.log(`Тормозной путь автомобиля ${this.result} м/сек.`);
            break;
            case 0.2:
                this.result = (this.sped * 2) / (2 * this.g * this.ks);
                console.log(`Тормозной путь автомобиля ${this.result} м/сек.`);
            break;
            case 0.1:
                this.result = (this.sped * 2) / (2 * this.g * this.ks);
                console.log(`Тормозной путь автомобиля ${this.result} м/сек.`);
            break;      
            default:
                this.result = 0;
                console.log('Авария!');
            break;
        } 
    };

}

//console.log(Auto);
//
//let audi = new Auto ('AUDI', 'А4', 'А256ИП');
//console.log(audi);
//console.log(`Марка автомобиля ${audi.brand}.`);
//console.log(`Модель автомобиля ${audi.model}.`);
//console.log(`Номер автомобиля ${audi.number}.`);
//audi.engineOnOff();
//audi.transmission();
//audi.sped();
//audi.distance();
//audi.braking();



// Прототипный метод

//let Bmw = function (brand, model, number) {
//    Auto.call(this, brand, model, number);
//    this.color = 'черный';
//};
//  
//Bmw.prototype = Object.create(Auto.prototype);
//Bmw.prototype.constructor = Bmw;
//
//Bmw.prototype.engineOnOff = function() {
//    let engineOnOffAnswer = prompt('Ваша машина заведена?');
//    this.engineOn = engineOnOffAnswer === 'да';
//    if (this.engineOn) {
//        console.log(`Двигатель автомобиля ${this.brand} ${this.model} номер ${this.number} цвет ${this.color} успешно запущен!`);
//    } else {
//        console.log(`Двигатель автомобиля ${this.brand} ${this.model} номер ${this.number} цвет ${this.color} выключен!`);
//    }
//};

let bmw = new Bmw('BMW', 'XM', 'A235ИП')
console.log(bmw);
bmw.engineOnOff();


console.log();

//Функциональный метод

function Car(brand, model, number) {
    Auto.call(this, brand, model, number);
    this.maxSpeed = 300;
}
  
Car.prototype = Object.create(Auto.prototype);
Car.prototype.constructor = Car;
  
Car.prototype.braking = function() {
    this.g = 9.81;
    this.ks = +prompt('Введите коэффициент сцепления автомобиля с дорогой: 0.7(сухой асфальт), 0.4(мокрый асфальт), 0.2(гравий), 0.1(снег, лед)');
    switch (this.ks) {
      case 0.7:
        this.result = (this.sped * 2) / (2 * this.g * this.ks);
        console.log(`Тормозной путь автомобиля ${this.result} м/сек.`);
        break;
      case 0.4:
        this.result = (this.sped * 2) / (2 * this.g * this.ks);
        console.log(`Тормозной путь автомобиля ${this.result} м/сек.`);
        break;
      case 0.2:
        this.result = (this.sped * 2) / (2 * this.g * this.ks);
        console.log(`Тормозной путь автомобиля ${this.result} м/сек.`);
        break;
      case 0.1:
        this.result = (this.sped * 2) / (2 * this.g * this.ks);
        console.log(`Тормозной путь автомобиля ${this.result} м/сек.`);
        break;
      default:
        this.result = 0;
        console.log('Авария!');
        break;
    }
    if (this.sped > this.maxSpeed) {
      console.log(`Вы превысили максимально допустимую скорость ${this.maxSpeed} км/ч!`);
    }
};

let ferrari = new Car('Ferrari', '458', 'У777УУ');
console.log(ferrari);
console.log(`Марка автомобиля ${ferrari.brand}.`);
console.log(`Модель автомобиля ${ferrari.model}.`);
console.log(`Номер автомобиля ${ferrari.number}.`);
ferrari.engineOnOff();
ferrari.transmission();
ferrari.sped();
ferrari.distance();
ferrari.braking();
  
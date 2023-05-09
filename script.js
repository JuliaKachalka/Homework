let Auto = function (brand, model, number) {
    this.brand = brand;
    this.model = model;
    this.number = number;
    this.engineOnOff = function () {
        this.engineOnOff = prompt('Ваша машина заведена?');
        if(this.engineOnOff){
            this.engineOnOff = 'да';
            console.log('Двигатель включен!');
        }else{
            console.log('Двигатель выключен!');
        }
    };
    this.transmission = function () {
        transmission = prompt('Включена передача: вперед, назад, нейтральная?');
        if(this.engineOnOff && (transmission === 'вперед' || transmission === 'назад' || transmission === 'нейтральная')){
            this.transmission = transmission;
            console.log(`Включена передача: ${this.transmission}.`);
        }else{
            console.log('Двигатель выключен!');
        }
    };
    this.sped = function () {
        sped = +prompt('Введите скорость автомобиля!');
        if(this.engineOnOff && this.transmission === 'вперед'){
            this.sped = sped;
            console.log(`Автомобиль движется вперед со скоростью ${this.sped} км/ч.`);
        }else if(this.engineOnOff && this.transmission === 'назад'){
            this.sped = sped;
            console.log(`Автомобиль движется назад со скоростью ${this.sped} км/ч.`);
        }else{
            console.log(`Машина выключена или включена нейтральная передача!`);
        }
    };
    this.distance = function () {
        if(this.engineOnOff && this.transmission === 'вперед'){
            this.distance = sped;
            console.log(`Автомобиль прошел дистанцию ${this.distance} км.`);
        }else if(this.engineOnOff && this.transmission === 'назад'){
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

console.log(Auto);

let audi = new Auto ('AUDI', 'А4', 'А256ИП');
console.log(audi);
console.log(`Марка автомобиля ${audi.brand}.`);
console.log(`Модель автомобиля ${audi.model}.`);
console.log(`Номер автомобиля ${audi.number}.`);
audi.engineOnOff();
audi.transmission();
audi.sped();
audi.distance();
audi.braking();
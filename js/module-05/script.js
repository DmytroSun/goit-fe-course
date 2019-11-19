"use strict";
console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 1");
// TASK1
// Задание 1
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
// В prototype функции-конструктора добавь метод getInfo(),
// который выводит в консоль значения полей login и email объекта который его вызвал.

// console.log(Account.prototype.getInfo); // function

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account('Poly', 'poly@mail.com');
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

const Account = function(login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function(login, email) {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

// console.dir(Account)
console.log(Account.prototype.getInfo); // function

const mango = new Account("Mangozedog", "mango@dog.woof");
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account("Poly", "poly@mail.com");
poly.getInfo(); // Login: Poly, Email: poly@mail.com

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 2");
// TASK2
// Задание 2
// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

// const mango = new User({ name: 'Mango', age: 2, followers: 20 });
// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({ name: 'Poly', age: 3, followers: 17 });
// poly.getInfo(); // User Poly is 3 years old and has 17 followers

class User {
  constructor({ name2, age2, followers2 }) {
    this._name2 = name2;
    this._age2 = age2;
    this._followers2 = followers2;
  }

  getInfo() {
    console.log(
      `User ${this._name2} is ${this._age2} yesrs old and has ${this._followers2}`
    );
  }
}

const mango2 = new User({
  name2: "Mango",
  age2: 2,
  followers2: 20
});

mango2.getInfo(); // User Mango is 2 years old and has 20 followers

const poly2 = new User({
  name2: "Poly",
  age2: 3,
  followers2: 17
});

poly2.getInfo(); // User Poly is 3 years old and has 17 followers

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 3");
// TASK3
// Задание 3
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих
// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

class Storage {
  constructor(arr3) {
    this.items = arr3;
  }

  getItems() {
    return this.items;
  }

  addItem(add_Item) {
    return this.items.push(add_Item);
  }

  removeItem(remove_Item) {
    const remove_item_index = this.items.indexOf(remove_Item);
    return this.items.splice(remove_item_index, 1);
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 4");
// // TASK4
// Задание 4
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

class StringBuilder {
  constructor(value4) {
    this.value = value4;
  }

  set valuer(str) {
    this.value = str;
  }

  get valuer() {
    return this.value;
  }

  append(appendValue) {
    this.valuer = this.valuer + appendValue;
  }

  prepend(prependValue) {
    this.valuer = prependValue + this.valuer;
  }

  pad(padValue) {
    this.valuer = padValue + this.valuer + padValue;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

// builder.valuer = "---";
// console.log(builder.valuer); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

// const builder2 = new StringBuilder("-");

// builder2.append("^");
// console.log(builder2.value); // '.^'

// builder.valuer = "---";
// console.log(builder.valuer); // '.^'

// builder2.prepend("^");
// console.log(builder2.value); // '^.^'

// builder2.pad("=");
// console.log(builder2.value); // '=^.^='

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 5");
// // TASK5
// Задание 5
// Напиши класс Car с указанными свойствами и методами.

// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor() {}

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {}

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {}

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {}

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {}

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {}
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

class Car {
  static getSpecs(car) {
    console.log(`maxSpeed = ${car._maxSpeed};
      speed=${car._speed};
      isOn = ${car._isOn};
      distance=${car._distance};
      price=${car._price}`);
  }
  constructor({ maxSpeed, price }) {
    (this._maxSpeed = maxSpeed),
      (this._price = price),
      (this._speed = 0),
      (this._isOn = false),
      (this._distance = 0);
  }

  turnOn() {
    this._isOn = true;
  }
  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }
  accelerate(accelerateValue) {
    if (this._speed + accelerateValue < this._maxSpeed) {
      this._speed = this._speed + accelerateValue;
    }
  }
  decelerate(deceleratValue) {
    if (this._speed - deceleratValue > 0) {
      this._speed = this._speed - deceleratValue;
    }
  }
  drive(hours) {
    if ((this._isOn = true)) {
      this._distance = this._distance + hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);

mustang.turnOn();
console.log(mustang);

mustang.accelerate(50);
console.log(mustang);

// JUST TO CHECK
mustang.accelerate(300);
console.log(mustang);

mustang.drive(2);
console.log(mustang);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
// console.log(mustang.turnOn());

mustang.decelerate(20);
console.log(mustang);

mustang.drive(1);
console.log(mustang);

mustang.turnOff();
console.log(mustang);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000
// speed: 30 - I concider as a mistake!!! (can't be after mustang.turnOff();)
console.log(mustang);

console.log(mustang._price); // 2000

mustang._price = 4000;
console.log(mustang);

console.log(mustang._price); // 4000
console.log(mustang);

console.log(
  "-----------------------------------------------------------------"
);
// console.log("Task 6");
// // TASK6

// console.log(
//   "-----------------------------------------------------------------"
// );
// console.log("Task 7");
// TASK7

// console.log(
//   "-----------------------------------------------------------------"
// );

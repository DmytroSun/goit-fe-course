"use strict";
console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 1");
// TASK1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

console.log(user);

user.mood = "happy";
user.hobby = "javascript";
user.premium = "false";

console.log(user);

const keys = Object.keys(user);

for (const key of keys) {
  console.log(key, ":", user[key]);
}

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 2");
// TASK2
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
// Вызовы функции для проверки работоспособности твоей реализации.
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

const users = {};

const countProps = function(prop) {
  const users = Object.assign(prop);
  const keys = Object.keys(users);
  let total = 0;
  for (const key of keys) {
    console.log(key);
    total = total + 1;
  }
  return total;
};
console.log(users);

console.log(countProps({})); // 0
console.log(
  countProps({
    name: "Mango",
    age: 2
  })
); // 2
console.log(
  countProps({
    mail: "poly@mail.com",
    isOnline: true,
    score: 500
  })
); // 3

console.log(
  countProps({
    mail: "poly@mail.com",
    isOnline: true,
    score: 500,
    test1: 800,
    test2: 1000
  })
);

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 3");
// TASK3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и
//  возвращает имя самого продуктивного (который выполнил больше всех задач).
//  Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// Вызовы функции для проверки работоспособности твоей реализации.

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

const employees = {};

const findBestEmployee = function(employees) {
  let maxTasks = 0;
  let maxTasksPerson;
  const keys = Object.keys(employees);
  for (const key of keys) {
    if (employees[key] > maxTasks) {
      maxTasks = employees[key];
      maxTasksPerson = key;
    }
  }
  return maxTasksPerson;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 4");
// TASK4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".
// Вызовы функции для проверки работоспособности твоей реализации.
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

const employees1 = {};

const countTotalSalary = function(employees1) {
  const values1 = Object.values(employees1);
  let totalsalary = 0;
  for (const value of values1) {
    totalsalary = totalsalary + value;
  }
  return totalsalary;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 5");
// TASK5
// Задание 5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа.
// Возвращает массив значений определенного поля prop из каждого объекта в массиве.
// Вызовы функции для проверки работоспособности твоей реализации.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []

const getAllPropValues = function(arr, prop) {
  const temparr = [];
  for (let product of arr) {
    if (prop in product) {
      temparr.push(product[prop]);
    } else return temparr;
  }
  return temparr;
};

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 6");
// TASK6
// Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов и имя продукта
// (значение свойства name). Возвращает общую стоимость продукта (цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

const calculateTotalPrice = function(arr, productName) {
  let totalPrice = 0;

  for (let product2 of arr) {
    if (product2.name === productName) {
      totalPrice = product2.price * product2.quantity;
    }
  }
  return totalPrice;
};

console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроид")); // 2800

console.log(
  "-----------------------------------------------------------------"
);
// console.log("Task 7");
// TASK7
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод отвечающий за добавление суммы к балансу
//    * Создает объект транзакции и вызывает addTransaction
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Создает объект транзакции и вызывает addTransaction
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод добавляющий транзацию в свойство transactions
//    * Принимает объект трназкции
//    */
//   addTransaction(transaction) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };

// console.log(
//   "-----------------------------------------------------------------"
// );

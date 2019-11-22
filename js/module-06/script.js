"use strict";
import users from "./users.js";
console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 1");
// // TASK1
// Задание 1
// Получить массив имен всех пользователей (поле name).

// const getUserNames = users => {
//   // твой код
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUserNames = arr => arr.map(counterItem => counterItem.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 2");
// TASK2
// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   // твой код
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithEyeColor = (arr, color) =>
  arr.filter(itemColor => itemColor.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 3");
// TASK3
// Задание 3
// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
//   // твой код
// };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getUsersWithGender = (arr, gender) =>
  arr.filter(itemSex => itemSex.gender === gender);

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 4");
// TASK4
// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//   // твой код
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getInactiveUsers = arr =>
  arr.filter(activeOrNot => activeOrNot.isActive === false);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 5");
// TASK5
// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   // твой код
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

const getUserWithEmail = (arr, email) =>
  arr.find(userEmail => userEmail.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 6");
// TASK6
// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет(поле age).

// const getUsersWithAge = (users, min, max) => {
//   // твой код
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const getUsersWithAge = (arr, min, max) =>
  arr.filter(UserAge => min <= UserAge.age && UserAge.age <= max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 7");
// TASK7
// Задание 7
// Получить общую сумму баланса(поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   // твой код
// };

// console.log(calculateTotalBalance(users)); // 20916

const calculateTotalBalance = arr =>
  arr.reduce((acc, userBalance) => acc + userBalance.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 8");
// TASK8
// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//   // твой код
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getUsersWithFriend = (arr, friendName) =>
  arr.filter(user => user.friends.includes(friendName)).map(user => user.name);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 9");
// TASK9
// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   // твой код
// };

const getNamesSortedByFriendsCount = array9 => {
  const newArray9 = [...array9];
  newArray9.forEach(eachUser => {
    newArray9.sort((a, b) => a.friends.length - b.friends.length)
  })
  const resultArray9 = newArray9.map(arrayItem => arrayItem.name);
  return resultArray9;
};

console.log(getNamesSortedByFriendsCount(users));

//['Moore Hensley',
//'Sharlene Bush',
//'Elma Head',
//'Carey Barr',
//'Blackburn Dotson',
//'Sheree Anthony',
//'Ross Vazquez']

console.log(
  "-----------------------------------------------------------------"
);
console.log("Task 10");
// TASK10
// Задание 10
// Получить массив всех умений всех пользователей(поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   // твой код
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

const getSortedUniqueSkills = array10 => {
  const newArray10 = [...array10];
  const oneSkillArray = [];
  const skillArray10 = newArray10.forEach(arrayItem => oneSkillArray.push(...arrayItem.skills));
  console.log(oneSkillArray);

  let uni = (uniqueFn) => uniqueFn.filter((v, i) => uniqueFn.indexOf(v) === i)
  return uni(oneSkillArray).sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

console.log(
  "-----------------------------------------------------------------"
);
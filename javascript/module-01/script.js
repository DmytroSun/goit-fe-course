"use strict";
// TASK1
// Задание 1
// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара(сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 
// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 
// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

console.log("-----------------------------------------------------------------");
console.log("Task 1");
let name = "Генератор защитного поля";
let price = 1000;
console.log(`Выбран "${name}", цена за штуку ${price} кредитов.`);
price = 2000;
console.log(`Выбран "${name}", цена за штуку ${price} кредитов.`);

console.log("-----------------------------------------------------------------");
console.log("Task 2");
// TASK2
// Задание 2
// Напиши скрипт проверки количества товаров на складе.Есть переменные
// total(количество товаров на складе) и
// ordered(единиц товара в заказе).
// Сравни эти значения и по результатам выведи:
// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.
// const total = 100;
// const ordered = 50;

const total = 100;
const ordered = 50;
if (ordered < total || ordered === total) {
    console.log("Заказ оформлен, с Вами свяжется менеджер.");
    alert("Заказ оформлен, с Вами свяжется менеджер. (Задание 2)");
} else {
    console.log("На складе недостаточно твоаров!");
    alert("На складе недостаточно твоаров! (Задание 2)");
}

console.log("-----------------------------------------------------------------");
console.log("Task 3");
// TASK3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет записано сообщение о результате.
// При загрузке страницы у посетителя запрашивается пароль через prompt:
// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку
'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку
'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

let message = "";
const ADMIN_PASSWORD = 'jqueryismyjam';
message = prompt("Введите Ваш пароль (Задание 3)")

if (message === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
    alert("Добро пожаловать!");
} else {
    message = "Доступ запрещен, неверный пароль!";
    alert("Доступ запрещен, неверный пароль!");
}
console.log("Ваш текущий введённый пароль:", message);

console.log("-----------------------------------------------------------------");
console.log("Task 4");
// TASK4
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).
// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.
// Напиши скрипт который:
// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

let credits = "";
credits = 23580;
let pricePerDroid = "";
pricePerDroid = 3000;
let boughtDroids = "";
let totalPrice = "";

boughtDroids = prompt("Укажите кол-во желаемых дроидов для покупки (Задание 4)");
if (boughtDroids === null) {
    console.log("Отменено пользователем!");
} else {
    if (((boughtDroids * pricePerDroid) < credits) || ((boughtDroids * pricePerDroid) === credits)) {
        totalPrice = boughtDroids * pricePerDroid
        credits = credits - totalPrice;
        console.log(`Вы купили ${boughtDroids} дроидов, на счету осталось ${credits} кредитов.`);
    } else {
        console.log("Недостаточно средств на счету!");
    }
}

console.log("-----------------------------------------------------------------");
console.log("Task 5");
// TASK5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
// Ниже приведен список стран и стоимость доставки.
// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const china = 100;
const chili = 250;
const australia = 170;
const india = 80;
const yamaika = 120;
let country = "";
let countryNonCase = "";

country = prompt("Введите название Вашей страны для просчёта стоимости доставки (или нажмите 'ОК'). (Задание 5)")
if (country !== null) {
    countryNonCase = country.toLowerCase();
    switch (countryNonCase) {
        case "китай":
            console.log(`Доставка в страну ${country} будет стоить ${china} кредитов.`);
            break;
        case "чили":
            console.log(`Доставка в страну ${country} будет стоить ${chili} кредитов.`);
            break;
        case "австралия":
            console.log(`Доставка в страну ${country} будет стоить ${australia} кредитов.`);
            break;
        case "индия":
            console.log(`Доставка в страну ${country} будет стоить ${india} кредитов.`);
            break;
        case "ямайка":
            console.log(`Доставка в страну ${country} будет стоить ${yamaika} кредитов.`);
            break;
        default:
            console.log("В вашей стране доставка не доступна.  :'(");
    }
} else {
    alert("Вы не указали страну. (Задание 5)");
    console.log("В alert выведено сообщение 'Вы не указали страну.'");
}

console.log("-----------------------------------------------------------------");
console.log("Task 6");
// TASK6
// Задание 6
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.
// let input;
// let total = 0;

let input = 0;
let totalInput = 0;
do {
    input = prompt('Введите число для подсчёта суммы итерации (Задание 6)');
    if (isNaN(input)) {
        alert("Введите только цифры (Задание 6)")
    } else {
        totalInput = totalInput + Number(input);
    }
} while (input !== null)
alert(`Общая сумма чисел равна ${totalInput}`);
console.log(`Общая сумма чисел равна ${totalInput}`);
console.log("-----------------------------------------------------------------");
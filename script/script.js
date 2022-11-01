// minimum
//task 1
let name = prompt("Як вас звуть?");
alert("Привіт " + name);

//task 2
let currentYear = 2022;
let userYear = +prompt("Введіть рік вашого народження");
alert("Вам " + currentYear - userYear + " років");

//task 3
let width = +prompt("Введіть довжину сторони квадрата в сантиметрах");
alert("Периметер квадрата дорівнює " + width * 4 + " см");

//normal
//task 1
let radius = +prompt("Введіть довжину радіуса кола, в сантиметрах");
let area = radius ** 2 * 3.14;
alert("Площа кола дорівнює " + area + "см*2");
//task 2
let distance = +prompt("Введіть відстань у км");
let hours = +prompt("Введіть час у годинах");
let speed = distance / hours;
alert("Швидкість дорівнює " + speed + " км/год");

//maximum
//task 1
let dollars = +prompt("Введіть певну кількість доларів");
let ratio = 1;
alert("Результат: " + dollars * ratio + " євро");

//task 2
console.log(2 && 0 && 2);
console.log(2 || 0 || 3);
console.log(2 && 0 || 3);
// //blocks
// let a = 10
// {
//     let b = 20
//     {
//         let c = 30
//         //які тут будуть значення змінних a, b, c, d

//         b++
//         a *= 10
//     }
//     {
//         let c = 50
//         //які тут будуть значення змінних a, b, c, d
//         b += 500
//     }
//     {
//         const a = 100500
//         const d = "value"
//         //які тут будуть значення змінних a, b, c, d
//         {
//             let a = -50
//             b = 1000
//             //які тут будуть значення змінних a, b, c, d
//         }
//         //які тут будуть значення змінних a, b, c, d
//     }
//     //які тут будуть значення змінних a, b, c, d
// }
// //які тут будуть значення змінних a, b, c, d


// //comparison if
// var age = + prompt("Скільки вам років?", "");
// if (age < 18 && age >= 0) {
//     alert("школяр");
// }
// else if (age >= 18 && age < 30) {
//     alert("молодь");
// }
// else if (age >= 30 && age < 45) {
//     alert("зрілість");
// }
// else if (age >= 45 && age < 60) {
//     alert("захід сонця");
// }
// else if (age >= 60) {
//     alert("як пенсія?");
// }
// else if (age < 0) {
//     alert("Ви ввели негативний вік");
// }
// else {
//     alert("чи кіборг, чи KERNESS");
// }

// //switch: sizes

// //Comparison: sizes
// let sizeUSA = +prompt('Введіть ваш розмір(США)');
// let sizeUK = sizeUSA + 2;
// switch (sizeUK) {
//     case 6:
//         alert('Ваш розмір 8');
//         break;
//     case 8:
//         alert('Ваш розмір 10');
//         break;
//     case 10:
//         alert('Ваш розмір 12');
//         break;
//     case 12:
//         alert('Ваш розмір 14');
//         break;
//     case 14:
//         alert('Ваш розмір 16');
//         break;
//     case 16:
//         alert('Ваш розмір 18');
//         break;
//     case 18:
//         alert('Ваш розмір 20');
//         break;
//     case 20:
//         alert('Ваш розмір 22');
//         break;
//     default:
//         alert('Ви ввели якусь дічь');
// }




// //switch: if

// let color = prompt("Введіть колір", "");
// if (color === 'red') {
//     document.write("<div style='background-color: red;'>червоний</div>");
//     document.write("<div style='background-color: black; color: white;'>чорний</div>");
// }
// else if (color === 'black') {
//     document.write("<div style='background-color: black; color: white;'>чорний</div>");
// }
// else if (color === 'blue') {
//     document.write("<div style='background-color: blue;'>синій</div>");
//     document.write("<div style='background-color: green;'>зелений</div>");
// }
// else if (color === 'green') {
//     document.write("<div style='background-color: green;'>зелений</div>");
// }
// else {
//     document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
// }

// //noswitch
// const noSwitch = (key, cases, defaultKey = 'default') => {
//     if(key in cases) {
//         return cases[key]();
//     }
//     else if(defaultKey in cases) {
//         return cases[defaultKey]();
//     }
//     //перевірка наявності key в cases
//     //якщо є - дістати значення по ключу. це буде функція. Запустити її
//     //якщо немає - витягти з об'єкта cases значення по ключу, ім'я якого лежить у змінній defaultKey. Запустити
//     //Нехай функція noSwitch повертає те, що повертає одна з функцій з об'єкта про всяк випадок
// }



// const drink = prompt("Що ви любите пити")
// noSwitch(drink, {
//     воду: () => console.log('Найздоровіший вибір!'),
//     чай() {
//         console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
//     },
//     "пиво": () => console.log('Добре влітку, та в міру'),
//     віскі: function () {
//         console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
//     },
//     default() {
//         console.log('шото я не зрозумів')
//     }
// })

//closure calc

// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//     .then(data => {
//         for (const currency in data.rates) {
//             const div = document.getElementById('div')
//             const btn = document.createElement('button');
//             btn.innerText = currency;
//             div.appendChild(btn);
//             btn.onclick = () => {
//                 const amount = prompt('Введіть сумму, яку ви хочете обміняти');
//                 const rate = data.rates[currency];
//                 const result = amount / rate;
//                 alert(result.toFixed(2));
//             }

//         }
//         //Ця функція запускається коли дані завантажуються.
//         //Інший код працює РАНШЕ.
//         //тільки тут є змінна data з завантаженими даними
//         console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
//     })


//closure calc 2
fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
        for (const currency in data.rates) {
            const form = document.getElementById('form');
            const option = document.createElement("option");
            option.innerText = currency;
            form.appendChild(option);
            const to = document.getElementById("to");
            const option1 = document.createElement("option");
            option1.innerText = currency;
            to.appendChild(option1);
        }
        //Ця функція запускається коли дані завантажуються.
        //Інший код працює РАНШЕ.
        //тільки тут є змінна data з завантаженими даними
        console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
    })




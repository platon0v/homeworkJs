// //Temperature
// const farenheight = celsius =>
//     (celsius * 1.8) + 32;

// //rgb
// const numberRGB = (r, g, b) => {
//     let rgb = "#" + (r < 16 ? "0" + r.toString(16) : r.toString(16)) + (g < 16 ? "0" + g.toString(16) : g.toString(16)) + (b < 16 ? "0" + b.toString(16) : b.toString(16));
//     return rgb
// }

// //flats
// const credentials = () => {
//     let name = prompt("Введіть своє ім'я:");
//     let surname = prompt("Введіть своє прізвище:");
//     let fatherName = prompt("Введіть своє по-батькові:");
//     name = capitalize(name.trim());
//     surname = capitalize(surname.trim());
//     fatherName = capitalize(fatherName.trim());
//     let fullName = name + " " + surname + " " + fatherName;
//     return {
//         name: name,
//         surname: surname,
//         fatherName: fatherName,
//         fullName: fullName,
//     };
// };

// const capitalize = (str) => {
//     let result;
//     result = str[0].toUpperCase() + str.slice(1).toLowerCase();
//     return result;
// };

// credentials();


// //New line
// const newLine = str =>
//     str = str.split('\\n').join('\n');


// //Prompt OR
// const promptOr = (age, defAge = 25) =>
//     (age = prompt('Введіть свій вік: ')) ? age : defAge;
// alert(promptOr());

// //Login And Password
// const login = (correctLogin = 'admin', correctPassword = 'qwerty') => {
//     let inputLogin = prompt('Ведіть логін:');
//     // let inputPassword = prompt('Введіть пароль:');
//     if (inputLogin === correctLogin) {
//         let inputPassword = prompt('Введіть пароль:');
//         if (inputPassword === correctPassword) {
//             alert('Все вірно')
//             return true;
//         }
//         else {
//             alert('Ви неправильно ввели пароль')
//             return false;
//         }
//    }
//    else {
//     alert('Ви неправильно веели логін');
//     return false;
//    }
// }
// login();

// //For Table

// const table = (multiplyTable) => {
//     let str = '<table>';
//     for (const num of multiplyTable) {
//         str += `<tr></tr>`;
//         console.log(num);
//         for (const number of num) {
//             str += `<td>${number}</td>`
//         }
//     }
//     str += '</table>'
//     document.write(str);
// }
// table([
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4, 5],
//     [0, 2, 4, 6, 8, 10],
//     [0, 3, 6, 9, 12, 15],
//     [0, 4, 8, 12, 16, 20],
//     [0, 5, 10, 15, 20, 25],
//   ]);

// //Filter Lexics
// let str = prompt('Введіть рядок');
// let banword = ['бляха', 'муха', "пляшка", "шабля"];
// const lexics = (str, banword) => {
//     let arr = str.split(' ');
//     let newStr = arr.filter(x => !banword.includes(x));
//     let censored = newStr.join(' ');
//     return censored;
// }
// alert(lexics(str, banword));

//Currency Table

// {
//     const table1 = () => {
//         return fetch("https://open.er-api.com/v6/latest/USD")
//             .then((res) => res.json())
//             .then((data) => {
//                 const { rates: exchangeRate } = data;
//                 const keys = Object.keys(exchangeRate);
//                 const exchangeArray = [];
//                 for (const currency1 of Object.keys(exchangeRate)) {
//                     const currency = [currency1];
//                     for (const currency2 of Object.keys(exchangeRate)) {
//                         const rate = exchangeRate[currency2] / exchangeRate[currency1];
//                         currency.push(rate.toFixed(3));
//                     }
//                     exchangeArray.push(currency);
//                 }
//                 return table2(exchangeArray, keys);
//             });
//     };

//     const table2 = (arr, keys) => {
//         let str = "<style>table, td {border: 1px solid black;}</style><table>";
//         str += "<tr><th></th>";
//         for (let key of keys) {
//             str += "<th>" + key + "</th>";
//         }
//         str += "</tr>";
//         for (let row of arr) {
//             str += "<tr>";
//             for (let number of row) {
//                 str += "<td>" + number + "</td>";
//             }
//             str += "</tr>";
//         }
//         str += "</table>";
//         document.querySelector("body").innerHTML += str;
//     };

//     table1();
// }

{
    //Form
    
}
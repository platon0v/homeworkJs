// {
//     //confirms
//     let answers = [];

//     let beer = confirm('Ти любиш пиво?ок-так, cancel - ні');
//     let weather = confirm('тобі подобається погода сьгодні?ок-так, cancel - ні');
//     answers.push(beer,weather);
//     alert(answers);

// }

// {
//     //prompts
//     let answers = [];
//     let beer = prompt('Ти любиш пиво?');
//     let weather = prompt('тобі подобається погода сьгодні?');
//     answers[0] = beer;
//     answers[1] = weather;
//     alert(answers);
// }

// {
//     //Item access
//     let arr = [1,2,3,4,5];
//     let index = prompt('Введіть індекс масиву');
//     alert(arr[index]);

// }

// {
//     //Item change
//     let arr = [1,2,3,4,5];
//     let index = prompt('Введіть індекс масиву');
//     let value = prompt('Введіть значення, яке ви хочете записати за цим індексом');
//     arr[index] = value;
//     alert(arr);
// }

// {
//     //Multiply table
//     const arr = [
//         [0, 0, 0, 0, 0, 0],
//         [0, 1, 2, 3, 4, 5],
//         [0, 2, 4, 6, 8, 10],
//         [0, 3, 6, 9, 12, 15],
//         [0, 4, 8, 12, 16, 20],
//         [0, 5, 10, 15, 20, 25],
//     ];
//     //Multiply table slice
//     newArr = arr.slice(1);
//     alert(newArr);
//     let result = [];
//     for( let i = 0; i < newArr.length; i++) {
//         result[i] = newArr[i].slice(1);
//         console.log(newArr);
//     }
//     alert(result);
// }

// {
//     //IndexOf Word
//     let str = prompt('Введіть рядок із кількох слів ');
//     let userWord = prompt('Введіть слово, яке ви хочете знайти');
//     let newUserStr = str.split(' ');
//     let index = newUserStr.indexOf(userWord);
//     if (index === -1) {
//         alert('Слово не знайдено');
//     }
//     else {
//         alert('Ваше слово за індексом ' + index);
//     }
// }

// {
//     //Reverse
//     let arr = [];
//     for (let i = 0; i < 5; i++) {
//         let element = prompt('Введіть элемент массиву за індексом ' + i);
//         arr.push(element);
//     }
//     alert(arr);
//     let newArr = [];
//     for (let i = 0; i < 5; i++) {
//         let element = arr.pop();
//         newArr.push(element);
//     }
//     alert(newArr);

//     //Reverse 2
//     let reverseArr = [];
//     for (let i = 0; i < 5; i++) {
//         let element = newArr.shift();
//         console.log(element);
//         reverseArr.unshift(element);
//     }
//     alert(reverseArr);
// }

// {
//     //Copy
//     const multiplyTable = [
//         [0, 0, 0, 0, 0, 0],
//         [0, 1, 2, 3, 4, 5],
//         [0, 2, 4, 6, 8, 10],
//         [0, 3, 6, 9, 12, 15],
//         [0, 4, 8, 12, 16, 20],
//         [0, 5, 10, 15, 20, 25],
//     ];
//     const copyMultiplyTable = multiplyTable.slice();
//     console.log(copyMultiplyTable);

//     //Deep Copy
//     let newCopyMultiplyTable = [];
//     for (let i = 0; i < multiplyTable.length; i++) {
//         newCopyMultiplyTable[i] = multiplyTable[i];
//     }
//     console.log(newCopyMultiplyTable);

// }

// {
//     //Array Equals
//     let arr = [1, 2, 3, 4, 5];
//     let arr2 = arr;
//     console.log(arr === arr2);//true
// }

// {
//     //Flat
//     const multiplyTable = [
//         [1, 2, 3, 4, 5],
//         [2, 4, 6, 8, 10],
//         [3, 6, 9, 12, 15],
//         [4, 8, 12, 16, 20],
//         [5, 10, 15, 20, 25],
//     ];
//     let unitedMultiplyTable = [...multiplyTable[0], ...multiplyTable[1], ...multiplyTable[2],
//     ...multiplyTable[3], ...multiplyTable[4]];
//     console.log(multiplyTable);
//     console.log(unitedMultiplyTable);
// }

// {
//     //Destruct
//     let str = prompt('Введіть рядок ');
//     const [letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8, letter9] = str;
//     alert([letter1, letter5, letter9]);
// }

// {
//     //Destruct default
//     let str = prompt('Введіть рядок');
//     const [letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8, letter9] = str;
//     console.log(letter4);
//     alert([letter2 || "!", letter4 || '!', letter5 || "!"]);
// }

// {
//     //Multiply table rest
//     const arr = [
//                 [0, 0, 0, 0, 0, 0],
//                 [0, 1, 2, 3, 4, 5],
//                 [0, 2, 4, 6, 8, 10],
//                 [0, 3, 6, 9, 12, 15],
//                 [0, 4, 8, 12, 16, 20],
//                 [0, 5, 10, 15, 20, 25],
//             ];
//     const [first, ...rest] = arr;
//     console.log(rest); 
//     const [a, ...secondRest] = [0, 1, 2, 3, 4, 5];
//     const [b, ...thirdRest] = [0, 2, 4, 6, 8, 10];
//     const [c, ...foursRest] = [0, 3, 6, 9, 12, 15];
//     const [d, ...fifthRest] = [0, 4, 8, 12, 16, 20];
//     const [e, ...sixthRest] = [0, 5, 10, 15, 20, 25];
//     let newMultiplyTable = [];
//     newMultiplyTable = [secondRest, thirdRest, foursRest, fifthRest, sixthRest];
//     console.log(newMultiplyTable);

// }

// {
//     //For Alert
//     let names = ["John", "Paul", "George", "Ringo"];
//     for(let element of names) {
//         alert(element);
//     }
// }

// {
//     //For Select Option
//     const currencies = ["USD", "EUR", "GBP", "UAH"]
//     let str = "<select>"
//     for (const currency of currencies) {
//         str += `<option>${currency}</option>`;
//     }
//     str += "</select>"
//     document.write(str) //document.write відобразить ваш HTML на сторінці
// }

// {
//     //For Table Horizontal
//     const names = ["John", "Paul", "George", "Ringo"]
//     let str = "<table>"
//     for (const name of names) {
//         str += `<td>${name}</td>`;
//     }
//     str += "</table>"
//     document.write(str) //document.write отобразит ваш HTML на странице
// }

// {
//     //For Table Vertical
//     const names = ["John", "Paul", "George", "Ringo"]
//     let str = "<table>"
//     for (const name of names) {
//         str += `<tr><td>${name}</td></tr>`;
//     }
//     str += "</table>"
//     document.write(str) //document.write відобразить ваш HTML на сторінці
// }

// {
//     //For Table Letters
//     const currencies = ["USD", "EUR", "GBP", "UAH"]
//     let str = "<table>"
//     for (const currency of currencies) { //цикл створює рядки
//         str += `<tr></tr>`;
//         console.log(currency)
//         for (const letter of currency) { //цикл створює осередки в одному рядку
//             str += `<td>${letter}</td>`;
//             console.log(letter)
//         }
//     }
//     str += "</table>"
//     document.write(str) //document.write відобразить ваш HTML на сторінці
// }

// {
//     //For Multiply Table
//     const multiplyTable = [
//         [0, 0, 0, 0, 0, 0],
//         [0, 1, 2, 3, 4, 5],
//         [0, 2, 4, 6, 8, 10],
//         [0, 3, 6, 9, 12, 15],
//         [0, 4, 8, 12, 16, 20],
//         [0, 5, 10, 15, 20, 25],
//     ];
//     let str = "<table>";
//     for(const num of multiplyTable) {
//         str+= `<tr></tr>`;
//         console.log(num);
//         for(const number of num) {
//             str+=`<td>${number}</td>`
//         }
//     }
//     str+="</table>";
//     document.write(str);
// }

// {
//     //Function Capitalize
//     const capitalize = str => {
//         let result = str.toUpperCase().slice(0, 1) + str.toLowerCase().slice(1);
//         return result //саме цей код забезпечить повернення результату функції
//     }
//     console.log(capitalize("cANBerRa")); //Canberra

//     //Map Capitalize
//     let userStr = prompt('Введіть рядок');
//     let newStr = userStr.split(" ");
//     let upperStr = newStr.map(capitalize);
//     let result = upperStr.join(' ');
//     alert(result);
// }

// {
//     //Filter Lexics
//     let str = prompt('Введіть рядок');
//     let arr = str.split(' ');
//     let banWords = ['acab', 'fuck', 'snitch'];
//     let newArr = arr.filter( x => !banWords.includes(x));
//     let result = newArr.join(' ');
//     alert(result);
// }

// {
//     //Beep Lexics
//     let str = prompt('Введіть рядок');
//     let arr = str.split(' ');
//     let banWords = ['acab', 'fuck', 'snitch'];
//     let newArr = arr.map(x => !banWords.includes(x) ? x: banWords = 'beep');
//     let result = newArr.join(' ');
//     alert(result);
// }

// {
//     //Reduce HTML
//     const currencies = ["USD", "EUR", "GBP", "UAH"];
//     let str = "<select>";
//     str += currencies.reduce((a, b) =>(a + "<option>" + b + "</option>"),"");
//     str += "</select>";
//     document.write(str);
// }

{
    //For Brackets Hell Check
    //ще не зробив
}
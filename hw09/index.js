// {
//     //while confirm
//     let a = 0;
//     do {
//         a++
//     }
//     while (
//         !confirm('ok або безкінечний цикл')
//     )
// }
// {
//     //array fill
//     {
//         const arr = [];
//         let input;
//         while ((input = prompt('заповніть масив')) !== null) {
//             arr.push(input);
//         }
//         console.log(arr);
//     }
// }
// {
//     //array fill nopush
//     {
//         let arr = []
//         let input
//         let i = 0
//         while (input = prompt("Заповніть массив")) {
//             arr[i] = words
//             i++
//         }
//         console.log(arr)
//     }
// }
// {
//     //infinite probability
//     let i = 0;
//     while (true) {
//         i++;
//         if (Math.random() > 0.9) {
//             break;
//         }
//         alert('кількість ітерацій' + i);
//     }
// }
// {
//     //empty loop
//     do { }
//     while (prompt('ок-цикл закінчується cancel - продовжуеться') === null)
// }
// {
//     //progression sum
//     let n = prompt('Введіть число до якого буде йти прогресія');
//     let sum = 0;
//     for (let i = 1; i < n; i += 3) {
//         sum += i;
//         console.log(sum);
//     }
//     alert('сумма прогресії' + sum);
// }
// {
//     //chess one line
//     let str = ' ';
//     let length = prompt('Введіть кількість символів');
//     for (let i = 0; i < length; i++) {
//         if (i % 2) {
//             str += '#';
//         }
//         else {
//             str += ' ';
//         }
//     }
//     alert(str);
// }
// {
//     //numbers
//     let str = '';
//     for (let i = 0; i < 10; i++) {

//         for (let j = 0; j < 10; j++) {
//             str += j;
//         }
//         str += "\n";
//     }
//     alert(str);
// }
// {
//     //chess
//     let str = '';
//     let chessWidth = 10;
//     let chessHeight = 8;
//     for (let i = 0; i < chessHeight; i++) {

//         for (let j = 0; j < chessWidth; j++) {
//             if (j % 2) {
//                 str += '#';
//             }
//             else {
//                 str += '.';
//             }
//         }
//         str += '\n';
//     }
//     alert(str);
// }
// {
//     //cubes
//     let arr = [];
//     let n = prompt('Введіть кількість елементів в масиві');
//     for (let i = 0; i < n; i++) {
//         arr[i] = i ** 3;
//     }
//     alert(arr);
// }
// {
//     //multiply table
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = [];
//         for (let j = 0; j < 10; j++) {
//             arr[i][j] = i * j;
//         }
//     }
//     console.log(arr);
// }

{
    //Ромбік
    let str ='';
    let size = 11;

}


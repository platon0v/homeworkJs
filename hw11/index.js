// {
//     //makeProfileTimer
//     function makeProfileTimer() {
//         const start = performance.now();
//         return function () {
//             const end = performance.now();
//             const time = end - start;
//             return time;
//         }
//     }
//     const timer = makeProfileTimer();
//     alert("Вимiрюємо час роботи цього alert");
//     alert(timer());
//     const timer2 = makeProfileTimer();
//     prompt("");
//     alert(`Час роботи двух alert та одного prompt ${timer()}`);
//     alert(`Час роботи prompt та попереднього alert ${timer2()}`);
// }

// {
//     //makeSaver
//     function makeSaver(a) {
//         let result = null;
//         let called = false;
//         return function(){
//             if(!called){
//                 result = a;
//                 called = true;
//             }
//             return result;
//         }
//     }
// }

// {
//     //myBind
//     function myBind(f, myThis, params){        
//         return function(...args){
//             let resultParam = [];          
//             for(let i = 0; i < params.length; i++){

//                 if(params[i] === undefined){                        
//                     resultParam.push(args[0]);
//                     args.shift();
//                 }else{
//                     resultParam.push(params[i]);
//                 }
//             }
//             console.log("resultParam : " + resultParam);
//             return f.apply(myThis, resultParam);
//         }
//     }
// }

{
    //checkResult
    function checkResult(original, validator) {
        function wrapper(...params) {

        }

        return wrapper
    }


    //numberPrompt - це функція, яка буде запускати prompt до тих пір, поки користувач не введе число
    const numberPrompt = checkResult(prompt, x => !isNaN(+x))
    let number = +numberPrompt("Введіть число", "0")  //параметри передаються наскрізь до оригіналу. Не забудьте передати це, використовуючи call або apply

    //gamePrompt - це функція, яка буде запускати prompt доти, доки користувач не введе одне зі слів 'камінь', 'ножиці', 'папір'
    const gamePrompt = checkResult(prompt, x => ['камень', 'ножиці', 'папір'].includes(x.toLowerCase()))
    const turn = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'")
}
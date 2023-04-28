{
    //Number: Odd
    let number = +prompt('Введіть число:');
function isOdd(number) {
    if (!Number.isInteger(number)) {
        alert('Введіть число!');
        return;
    }
    if (number % 2 === 1) {
        alert('Число непарне');
    }
    else {
        alert('Число парне');
    }
}
isOdd(number);
}
{
    //String: lexics
    let str = prompt('Введіть текст: ');
    let incorrectWord = 'машина';
    let newStr = str.indexOf(incorrectWord);
    if (newStr === -1) {
        alert('некоректних слів немає');
    }
    else {
        alert('некоректне слово під індексом' + newStr);
    }
}
{
    //Boolean
    let firstAnswer = confirm('Вам подобається пиво?');
    if(firstAnswer) {
        alert('Це чудово!');
    }
    else {
        alert('У вас поганий смак!');
    }
}
{
    //Boolean: if
    let answer = confirm('якої ви статі? ок- чоловік, отмена- жінка');
    if (answer) {
        alert('ви чоловік');
    }
    else {
        alert('ви жінка');
    }
}
{
    //Comparison: sizes
    let sizeUSA = +prompt('Введіть ваш розмір(США)');
    let sizeUK = sizeUSA + 2;
    alert('ваш розмір(Великобританія): ' + sizeUK);

}
{
    //Ternary
    let sex = confirm ("Якої ви статі? (Ок - чоловік, Cancel - жінка)");
    sex ? "Ви чоловік" : "Ви жінка";
}
{
    //Training

}
{
    //Prompt: or
    let age = prompt('Введіть свій вік: ');
    if(age === false || age === "") {
        alert('Ви не ввели свій вік!');
    }
    else {
        alert('ваш вік: ' + age);
    }
}

{
    //Confirm: or this days
    confirm ("Шопінг?") || alert("ти бяка");
}

{
    //Confirm: if this days
    let shoping = confirm('Шопінг?');
    console.log(shoping);
    if (shoping === false) {
        alert('ти бяка');
    }
}

{
    //Default: or
    let surname = prompt('Введіть ваше прізвище') || 'Платонов';
    let name = prompt('Введіть ваше імя') || 'Дмитро';
    let fatherName = prompt('Введіть ваше імя по батькові') || 'Олександрович';
    alert(surname + ' ' + name + ' ' + fatherName);
}

{
    //Default: if
    let surname = prompt('Введіть ваше прізвище');
    let name = prompt('Введіть ваше імя');
    let fatherName = prompt('Введіть ваше імя по батькові');
    if (surname === false || surname ==='') {
        surname = 'Платонов';
    }
    if (name === false || name === '') {
        name = 'Дмитро';
    }
    if (fatherName === false || fatherName === "") {
        fatherName = 'Олександрович';
    }
    alert(surname + ' ' + name + ' ' + fatherName);
}

{
    //Login and password
    let login = prompt('Введіть логін');
    
    if(login === 'admin') {
        let password = prompt('Введіть пароль');
        if( password === 'qwerty'){
            alert('Вітаю!');
        }
        else {
            alert('Ви ввели неправильний пароль!');
        }
    }
    else {
        alert('Ви ввели неправильний логин');
    }
}

{
   //Currency exchange
   let currency = prompt('Введіть валюту(usd/eur/lb)');
   let purchaseSale = confirm('ok-purchase/cancel-sale');
   let rate;
   if(currency.toUpperCase() === 'USD') {
      rate = purchaseSale ? 37.20 : 37.70;
   }
   if(currency.toUpperCase() === 'EUR') {
      rate = purchaseSale ? 41.30 : 41.55;
   }
   if(currency.toUpperCase() === 'LB') {
      rate = purchaseSale ? 44.50 : 47.50;
   }
   let sum = +prompt('Введите вашу сумму');
   let result;
   if(purchaseSale === true) {
      result = Math.round(sum * rate);
      alert('Ви отримаєте ' + result + 'грн');
   }
   else {
      result = Math.round(sum / rate);
      alert('Ви отримаєте ' + result + currency);
   }
}
{
   //Scissors
   let rockPaperScissors = ['камінь', 'ножиці', 'папір'];
   let user = prompt('Введіть камінь, ножиці або папір');
   let computer = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
   alert('Компьютер вибрав ' + computer);
   if(user === computer) {
      alert('Нічия!');
   }
   else if(user === 'камінь' && computer === 'ножиці'
   || user === 'ножиці' && computer === 'папір'
   || user === 'папір' && computer === 'камінь') {
      alert('Ви перемогли');
   }
   else {
      alert('компьютер переміг');
   }

}
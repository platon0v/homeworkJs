{
    //assign: evaluation
    var a = 5;
    var b, c;
    b = a * 5;
    b = c = (b / 2);
    alert('b= ' + b);
    alert('c= ' + c);
}
{
    //Number: age
    let years = prompt('Скільки вам повних років?');
    let birthYear = (2023 - years);
    alert('Ваш рік народження: ' + birthYear);
}
{
    //Number: temperature
    let temp = prompt('введіть температуру');
    let units = prompt('введіть одиницю вимірювання: цельсій або фаренгейт');
    if (units === 'цельсій') {
        alert('температура у фаренгейтах: ' + (temp * 1.8 + 32));
    }
    else {
        alert('температура у цельсіях: ' + ((temp - 32) * 5 / 9));
    }
}
{
    //Number: divide

    let dividend = prompt('введіть ділене: ');
    let divisor = prompt('введіть дільник: ');
    let result = Math.round(dividend / divisor);
    alert(`${dividend} / ${divisor} = ${result}`);
}
{
    //Number: currency
    const rate = 36.77;
    let uah = prompt('Введіть кількість гривні:');
    let amountDollar = uah / rate;
    alert('кількість долларів: ' + amountDollar.toFixed(2));
}
{
    //Number: RGB
    let red = +prompt('Введіть червоний: ');
    let green = +prompt('Введіть зелений: ');
    let blue = +prompt('Введіть синій: ');
    let cssRed = red.toString(16);
    let cssGreen = green.toString(16);
    let cssBlue = blue.toString(16);
    alert('ваш css колір: #' + cssRed + cssGreen + cssBlue);
}
{
    //Number: flats
    let floor = Number(prompt("floor")); //сколько этажей в доме//
    let numF = Number(prompt("flats")); // количество квартир на этаже//
    let flat = Number(prompt("flat")); // номер квартиры //

    let blockF = Math.ceil(flat / (floor * numF)); // номер подъезда
    alert(blockF);

    let flatF = (flat / numF) % floor;
    if (flatF === 0) {
        alert(floor);
    } else {
        alert(Math.ceil(flatF));
    }
}

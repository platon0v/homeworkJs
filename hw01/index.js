let tankCapacity = 55; // йомкість баку машини
let gasolinePrice = 45; // ціна за бензин
let fullPrice = tankCapacity * gasolinePrice; // ціна за повний бак бензину
alert(`ціна за повний бак бензину ${fullPrice}` );
let averageConsumption = 8; // середня витрата палива на 100км
let kilometersFulltank = tankCapacity / averageConsumption * 100; // кількість кілометрів, яку ви проїдете з повним баком бензина
alert('кількість кілометрів, яку ви проїдете з повним баком з середнью витратою 8л на 100км' + kilometersFulltank);
let amountKm = prompt('Введіть кількість проїханих кілометрів');
let userConsumption = prompt(`Введіть середню витрату бензину за 100км`); 
let spentGasoline = amountKm * userConsumption / 100;
alert('ви спалили' + spentGasoline + 'літрів бензину');
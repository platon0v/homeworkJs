{
    //Literals
    let person = {
        name: "Dima",
        surname: "Platonov",
        age: 20,
        height: 191,
        weight: 80,
        //Literals expand
        [prompt('Введіть ключ')]: prompt('Введіть значення'),
    }
    console.log(person);
    let schoolClass = {
        students: 30,
        girls: 15,
        boys: 15,
        //Literals expand
        [prompt('Введіть ключ')]: prompt('введіть значення'),
    }
    console.log(schoolClass);

    //Literals copy
    let obj = {};
    obj[prompt('Введіть ключ')] = prompt('Введіть значення');
    console.log(obj);
    obj = {...schoolClass};
    console.log(obj);
}

{
    //Html tree
    var body = document.querySelector('body');
    let obj = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [{
                    tagName: 'span',
                    children: ['Enter a data please']
                },
                {
                    tagName: '/br'
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'name',
                    }
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: ' text',
                        id: 'surname',
                    }
                }]
            },
            {
                tagName: 'div',
                children: [{
                    tagName: 'button',
                    children: ['OK'],
                    attrs: {
                        id: 'ok'
                    }
                },
                {
                    tagName: 'button',
                    children: ['OK'],
                    attrs: {
                        id: 'cancel'
                    }
                }]
            }
        ]
    }
    //Parent
    body.children[0].parent = body;
    body.children[1].parent = body;
    body.children[0].children[0].parent = body.children[0];
    body.children[0].children[1].parent = body.children[0];
    body.children[0].children[2].parent = body.children[0];
    body.children[0].children[3].parent = body.children[0];
    body.children[1].children[0].parent = body.children[1];
    body.children[1].children[1].parent = body.children[1];
    //Change OK
    body.children[1].children[0][prompt('Введіть ключ')] = prompt('Введіть значення');
    console.log(body.children[1].children[0]);
    //Destructure
    const {
        children: [
          {
            children: [{ children: spanText }],
          },
        ],
      } = body;
      alert(" Значення тексту у тезі span буде: " + spanText);
}

{
    //Destruct array
    let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
    const [odd1, even1, odd2, even2, odd3, even3, ...arr1] = arr;

}

{
    //Destruct string
    let arr = [1, "abc"];
    let [number, [s1,s2,s3]] = [...arr];
}

{
    //Destruct 2
    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [{ name: 'Maria' }, { name: 'Nikolay' }]
    }
    const {children:[{name: name1},{name: name2}]} = obj;
    alert(name1 + name2);
}

{
    //Destruct 3
    let arr = [1, 2, 3, 4, 5, 6, 7, 10];
    const { 0: a, 1: b, length } = arr;
}

{
    //Copy delete
    let person = {
        name: "Dima",
        surname: "Platonov",
        age: 20,
        height: 191,
        weight: 80
    };
    let delKey = prompt('Введіть ключ, який потрібно видалити (name/surname/age/height/weight)');
    const { [delKey]: _, ...rest } = person;
    console.log(rest);
}

{
    //Currency real rate
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            const { rates: currency } = data;
            let userCurrency = prompt('Введіть вхідну валюту' + Object.keys(currency)).toUpperCase().trim();
            let convertCurrency = prompt('Введіть валюту, в яку відбувається конвертація' + Object.keys(currency)).toUpperCase().trim();
            let sumUserCurrency = +prompt('Введіть сумму вхідної валюти');
            if(userCurrency === convertCurrency) {
                alert('Ви вибрали однакові валюти');
            }
            else if (userCurrency && convertCurrency in currency){
                let res = sumUserCurrency / currency[userCurrency] * currency[convertCurrency];
                alert('Ви отримаете ' + res + convertCurrency);
            }
            else {
            alert('Ви неправильно ввели валюту');
            }
            //ця функція запускається коли дані завантажуються.
            //Інший код працює РАНIШЕ.
            //тільки тут є змінна data з завантаженими даними
            console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
        })
}

{
    //Currency drop down
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
            const { rates: currencies } = data;
            let sel = '<select>';
            for( const currency of Object.keys(currencies) ) {
                sel += '<option>' + currency + '</option>';
            }
            sel += '</select>';
            document.write(sel);
         })
}

{
    //Currency table
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            const { rates: currencies } = data;
            let str = '<table><th></th>';
            for (const currency of Object.keys(currencies)) {
                str += '<th>' + currency + '</th>';
            }

            for (const currency of Object.keys(currencies)) {
                str += '<tr></tr>';
                str += '<td>' + currency + '</td>';

                for( const cur of Object.keys(currencies)) {
                    str += '<td>' + (currencies[currency] / currencies[cur]).toFixed(2) + '</td>';
                }
            }

            str += "</table>";
            document.write(str);
        })
}

{   
    //form
    const car = {
      Name: "chevrolet chevelle malibu",
      Cylinders: 8,
      Displacement: 307,
      Horsepower: 130,
      Weight_in_lbs: 3504,
      Origin: "USA",
      in_production: false,
    };
    let form = "<form>";
    for (let [key, value] of Object.entries(car)) {
      let inputType = "text";
      if (typeof value === "number") {
        inputType = "number";
      } else if (typeof value === "boolean") {
        inputType = "checkbox";
      }
      const checkedAttr = value ? "checked" : undefined;
      form += `<label>${key}: <input type="${inputType}" name="${key}" value="${value}" ${checkedAttr} /></label>`;
    }
    form += "</form>";
    document.querySelector("body").innerHTML += form;
  }

// {
//     //Table
//     const persons = [
//         {
//             name: 'Марія',
//             fatherName: 'Іванівна',
//             surname: 'Іванова',
//             sex: 'female'
//         },
//         {
//             name: 'Миколай',
//             fatherName: 'Іванович',
//             surname: 'Іванов',
//             age: 15
//         },
//         {
//             name: 'Петро',
//             fatherName: 'Іванович',
//             surname: 'Іванов',
//             married: true
//         },
//     ]
//     let str = '<table>';
//     for()
//     document.write(str);
// }


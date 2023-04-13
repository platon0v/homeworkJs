{
    //String: greeting
    let str = prompt('як вас звати?');
    alert('Привіт, ' + str);
}
{
    //String: gopni4ek
    let str = prompt();
    let a = str.split(',');
    let b = a.join(',блін')
    alert(b);
}
{
    //String: capitalize
    let str = "cANBerRa";
    let result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    alert(result);
    console.log(result); //Canberra
}
{
    //String: word count
    let str = prompt();
    let countWords = str.split(' ');
    let words = countWords.length;
    alert(words);
}
{
    //String: credentials
    let fullName = [];
    fullName[0] = prompt('введите вашу фамилию').trim();
    fullName[1] = prompt('введите ваше имя').trim();
    fullName[2] = prompt('введите ваше отчество').trim();
    let newFullName = fullName.map(function(element) {
        return element.charAt(0).toUpperCase() + element.slice(1);
    })
    let result = newFullName.join(' ');
    alert(result);
}
{
    //String: beer
    let str = "Було жарко. Василь пив пиво вприкуску з креветками"
    let newStr = str.split(' ');
    let index = newStr.indexOf('пиво');
    newStr[index] = 'чай';
    let result = newStr.join(' ');
    alert(result);


}
{
    //String: no tag
    let str = "якийсь текст, в якому є один тег <br/> і всяке інше";
    let startIndex = str.indexOf('<');
    let endIndex = str.indexOf('>');
    let startStr = str.slice(0, startIndex);
    let endStr = str.slice(endIndex+1);
    let result = startStr + endStr;

    alert(result);

    console.log(result); //якийсь текст, в якому є один тег і всяке інше
}
{
    //String: big tag
    let str = "якийсь текст у якому є один тег <br /> і всяке інше";
    let startIndex = str.indexOf('<');
    let endIndex = str.indexOf('>');
    let middleIndex = str.indexOf('<','>');
    let startStr = str.slice(0,startIndex);
    let endStr = str.slice(endIndex+1);
    let middleStr = str.slice(middleIndex, endIndex+1);
    let result = startStr + middleStr.toUpperCase() + endStr;
    alert(result);
    console.log(result); //якийсь текст, в якому є один тег <BR /> і всяке інше
}
{
    //String: new line
    let str = prompt('Введите текст');
    console.log(str);
    let arr = str.split('\\n');
    console.log(arr);
    let result = arr.join('\n');
    alert(result);
}
{
    //String: youtube
    const str = /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-]+)(&\S+)?/;
    let text = prompt('введіть текст та посилання на youtube відео');
    let match = text.match(str);
    let identificator = match[1];
    let html = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${identificator}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    document.write(html);

    
}




{
    //Arrow to Functions
    function farenheight(celsius) {
        return (celsius * 1.8) + 32;
    }
    console.log(farenheight(20));

    function capitalize(str) {
        let result;
        result = str[0].toUpperCase() + str.slice(1).toLowerCase();
        return result;
    };
    console.log(capitalize('DSDdsD'));

    function newLine(str) {
        str = str.split('\\n').join('\n');
        return str;
    }


    function colorConverter(r, g, b) {
        return (
            "#" +
            (r < 16 ? "0" + r.toString(16) : r.toString(16)) +
            (g < 16 ? "0" + g.toString(16) : g.toString(16)) +
            (b < 16 ? "0" + b.toString(16) : b.toString(16))
        );
    }

    console.log(colorConverter(14, 255, 100));

    function filterWords(inputString, badWords) {
        let wordsArr = inputString.split(" ");
        let arr = wordsArr.filter((word) => !badWords.includes(word));
        let censoredStr = arr.join(" ");
        return censoredStr;
    }
    const inputString = prompt("Введіть рядок");
    const badWords = ["бляха", "муха", "пляшка", "шабля"];
    alert(filterWords(inputString, badWords));

}
{
    //Create person
    function createPerson(name, surname) {
        return {
            name,
            surname,
            getFullName() {
                if (this.fatherName) {
                    return `${this.name} ${this.surname} ${this.fatherName}`;
                }
                return `${this.name} ${this.surname}`;
            }
        }
    }
    const a = createPerson("Вася", "Пупкін")
    const b = createPerson("Ганна", "Іванова")
    const c = createPerson("Єлизавета", "Петрова")

    console.log(a.getFullName()) //Вася Пупкін
    a.fatherName = 'Іванович'
    console.log(a.getFullName()) //Вася Іванович Пупкін

    console.log(b.getFullName()) //Ганна Іванова
}


{
    //createPersonClosure
    function createPersonClosure(name, surname) {
        let age;
        let fatherName;
        function getName() {
            return name;
        }
        function getSurname() {
            return surname;
        }
        function getFatherName() {
            return fatherName;
        }
        function getAge() {
            return age;
        }
        function getFullName() {
            return `${getName()} ${getFatherName()} ${getSurname()}`;
        }
        function setName(newName) {
            if (
                typeof newName === 'string' &&
                newName[0] === newName[0].toUpperCase()
            ) {
                name = newName;
                return name;
            }
            return name;
        }
        function setSurname(newSurname) {
            if (
                typeof newSurname === 'string' &&
                newSurname[0] === newSurname[0].toUpperCase()
            ) {
                surname = newSurname;
                return surname;
            }
            return surname;
        }
        function setFatherName(newFatherName) {
            if (
                typeof newFatherName === 'string' &&
                newFatherName[0] === newFatherName[0].toUpperCase()
            ) {
                fatherName = newFatherName;
                return fatherName;
            }
            return fatherName;
        }
        function setAge(newAge) {
            if (
                typeof newAge === 'number' &&
                newAge >= 0 && newAge <= 100
            ) {
                age = newAge;
                return age;
            }
            return age;
        }
        function setFullName(fullName) {
            const names = fullName.split(" ");
            if (names.length === 3) {
                const [newSurname, newName, newFatherName] = names;
                setName(newName);
                setSurname(newSurname);
                setFatherName(newFatherName);
            }
            return setFullName;
        }
        return {
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName,
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName,
        };
    }
    const a = createPersonClosure("Вася", "Пупкін")
    const b = createPersonClosure("Ганна", "Іванова")
    console.log(a.getName())
    a.setAge(15)
    a.setAge(150) //не працює

    b.setFullName("Петрова Ганна Миколаївна")
    console.log(b.getFatherName()) //Миколаївна
    console.log(a.getAge());
}


{
    //createPersonClosureDestruct
    function createPersonClosureDestruct({
        name = "",
        surname = "",
        fatherName = "",
        age = undefined,
    } = {}) {
        function getName() {
            return name;
        }
        function getSurname() {
            return surname;
        }
        function getFatherName() {
            return fatherName;
        }
        function getAge() {
            return age;
        }
        function getFullName() {
            return `${getName()} ${getFatherName()} ${getSurname()}`;
        }
        function setName(newName) {
            if (
                typeof newName === "string" &&
                newName[0] === newName[0].toUpperCase()
            ) {
                name = newName;
                return name;
            }
            return name;
        }
        function setSurname(newSurname) {
            if (
                typeof newSurname === "string" &&
                newSurname[0] === newSurname[0].toUpperCase()
            ) {
                surname = newSurname;
                return surname;
            }
            return surname;
        }
        function setFatherName(newFatherName) {
            if (
                typeof newFatherName === "string" &&
                newFatherName[0] === newFatherName[0].toUpperCase()
            ) {
                fatherName = newFatherName;
                return fatherName;
            }
            return fatherName;
        }

        function setAge(newAge) {
            if (typeof newAge === "number" && newAge >= 0 && newAge <= 100) {
                age = newAge;
                return age;
            }
            return age;
        }

        function setFullName(fullName) {
            const names = fullName.split(" ");
            if (names.length === 3) {
                const [newSurname, newName, newFatherName] = names;
                setName(newName);
                setSurname(newSurname);
                setFatherName(newFatherName);
            }
            return getFullName();
        }
        return {
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName,
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName,
        };
    }
    const a2 = createPersonClosureDestruct(createPerson("Вася Пупкін"));
    const b2 = createPersonClosureDestruct({ name: "Миколай", age: 75 });
}

{
    //isSorted
    function isSorted(...numbers) {
        for (let i = 0; i < numbers.length; i++) {
            if (typeof numbers[i] !== 'number' || isNaN(numbers[i])) {
                return false;
            }
        }
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > numbers[i + 1]) {
                return false;
            }
        }
        return true;
    }
    console.log(isSorted(1, 2, 5, 10));
    console.log(isSorted(9, 5, 6, 7));
    console.log(isSorted('a', 2, 4, 6));
    //testIsSorted
    const arr = [];
    let input;
    while ((input = prompt('заповніть масив')) !== null) {
        arr.push(Number(input));
    }
    console.log(arr);
    let result = isSorted(...arr);
    console.log(result);
}
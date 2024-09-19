"use strict";
// import {num} from "./test2";
// let str:string = 'str';
// console.log(str);
// console.log(str.toUpperCase());
// let str2:string = 'str2';
// console.log(str2);
// let age: number = 1;
// let age1:number = 0.1;
// let age2:number = NaN;
// let age4:number = Infinity;
// let age5:number = -4e10;
// let bd:boolean = false;
// let bd2:boolean = true;
//запуск компилятора tsc [path to File] 
//вывести в терминале ts-node ./index.ts
// const isBd: boolean = false;
// let age: number = 40;
// const userName: string = 'Vlad';
// const creareError = () => {
//     throw new Error('Some Erroe mess')
// }
// function logBdMsg(isBd: boolean, userName: string, age: number, someValue?: any): string {
//     if (isBd) {
//         const mess = `поздравляю ${userName}, вам ${age + 1}`
//         console.log(mess);
//         return mess
//     } else if (!isBd) {
//         return 'Error'
//     } else {
//         return creareError()
//     }
// }
// // let someValue:any = 'str'
// // someValue = 2
// // someValue = false 
// const jsonData = '{"title": "Hello World"}'
// const titleObj: { title: string } = JSON.parse(jsonData);
// const result = logBdMsg(isBd, userName, age);
// console.log(result);
// console.log(titleObj.title);
// // ----------------
// // Задание максимально типизировать
// const currRate: string = "1.05";
// const fetchCurr = (response: string): number => {
//     const data: number = JSON.parse(response);
//     return data;
// };
// function transferEurToUsd(available: boolean, amount: number, commission: number): void {
//     if (available) {
//         let res: number = fetchCurr(currRate) * amount * commission;
//         console.log(res);
//         // Или запись в элемент на странице вместо консоли
//     } else {
//         console.log("Сейчас обмен недоступен");
//     }
// }
// transferEurToUsd(true, 500, 1.05);
// // never - функция никогда не вернет результата
// type TAnimal = 'cat' | 'dog'
// let cat: TAnimal = "cat"
// function getAnimalVoice(someAnimal: TAnimal) {
//     switch (someAnimal) {
//         case 'cat':
//             return 'may';
//         case 'dog':
//             return 'gav';
//         default:
//             const nextAnimal: never = someAnimal
//             return nextAnimal
//     }
// }
// const result2 = getAnimalVoice("cat")
// console.log(result2)
// console.log(result2)
const arr = [[1, 2], [3, 4]];
const obj = {
    name: 'Vlad',
    age: 32
};
const result2 = Object.entries(obj);
const arr4 = [true, 4];
arr4.push(5);
const arr5 = [true, 4];
arr5.push(1);
const arr6 = [true, 4, 'jhhjhj'];
arr6.push(1);
const arr7 = [true, 4, 'jhhjhj'];
arr7.push('dfdfdf');
arr7[3] = 'nbnnnnn';
const arr8 = [true, false, true, false, 40, 'str'];
// плохая практика 
function getPerson() {
    const res = ['ff', 2];
    return res;
}
const person = getPerson();
function getPerson1() {
    const res = ['ff', 2];
    return res;
}
const person1 = getPerson1();
////////
let user;
user = ['str'];
user = ['str', 32];
user = ['str', 32, false];
let vlad = ['Vlad', 32];
let vlad2 = ['Vlad', 32];
let v1 = vlad[0];
let v2 = vlad[1];
const [name, age] = vlad;
// function getUserName([name, age]: Person) {
//     name.toUpperCase()
//     age.toFixed()
//     return name
// }
// getUserName(vlad)
function getUserName(user) {
    user.forEach(element => {
        if (typeof element === 'string') {
            element.toUpperCase();
        }
        else {
            element.toFixed();
        }
    });
}
getUserName(vlad);
const cat = {
    name: 'Mursik',
    voice: 'may',
    wool: false,
    climb: true
};
const dog = {
    name: 'Rex',
    voice: 'gav',
    wool: true,
    friendly: true
};
// type guard
function isCat(pet) {
    return pet.climb !== undefined;
}
function playWitnPet(pet) {
    if (isCat(pet)) {
        pet.climb;
        console.log('play with cat');
    }
    else {
        pet.friendly;
        console.log('play with dog');
    }
    {
        let a;
        //не дойдет сюда
    }
}
function isDog(pet) {
    return pet.friendly !== undefined;
}
function playWitnPet2(pet) {
    if (isCat(pet)) {
        pet.climb;
        console.log('play with cat');
    }
    else {
        pet.friendly;
        console.log('play with dog');
    }
}
playWitnPet(cat);
playWitnPet(dog);
////////
const box = document.querySelector('.box');
// box?.textContent = 'some text'
const input = document.querySelector('input');
input.value;
// const a = document.querySelector('a') as HTMLAnchorElement
// a.click
const aAll = document.querySelectorAll('a');
aAll.forEach((el) => {
});
const formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
const form = document.querySelector('form');
const email = document.querySelector('#email');
const title = document.querySelector('#text');
const text = document.querySelector('#email');
const ckeckbox = document.querySelector('#ckeckbox');
form.addEventListener('submit', (e) => {
    var _a, _b, _c, _d;
    e.preventDefault();
    formData.email = (_a = email.value) !== null && _a !== void 0 ? _a : '';
    formData.title = (_b = title.value) !== null && _b !== void 0 ? _b : '';
    formData.text = (_c = text.value) !== null && _c !== void 0 ? _c : '';
    formData.checkbox = (_d = email.checked) !== null && _d !== void 0 ? _d : false;
    if (validateFormData(formData)) {
        checkFormData(formData);
    }
});
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(data) {
    const arrValues = Object.values(data);
    const isValid = arrValues.every((value) => value);
    if (isValid) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    const { email } = data;
    const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    const isNotValid = emails.some((value) => value === email);
    // Если email совпадает хотя бы с одним из массива
    if (isNotValid) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}

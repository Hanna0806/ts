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

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

const arr: number[][] = [[1, 2], [3, 4]];

const obj = {
    name: 'Vlad',
    age: 32
}
const result2 = Object.entries(obj)

const arr4: (boolean | number)[] = [true, 4]
arr4.push(5);

const arr5: [boolean, number] = [true, 4];
arr5.push(1);

const arr6: [boolean, number, string] = [true, 4, 'jhhjhj'];
arr6.push(1);

const arr7: [boolean, number, string, ...string[]] = [true, 4, 'jhhjhj'];
arr7.push('dfdfdf');
arr7[3] = 'nbnnnnn';

const arr8: [...boolean[], number, string] = [true, false, true, false, 40, 'str'];
// плохая практика 

function getPerson() {
    const res: [string, number] = ['ff', 2]
    return res
}
const person = getPerson()

function getPerson1(): [string, number] {
    const res: [string, number] = ['ff', 2]
    return res
}
const person1 = getPerson1()

////////
let user: [string, number?, boolean?];
user = ['str']
user = ['str', 32]
user = ['str', 32, false]
// user[3] = false // er


/////////
type Person = [name: string, age: number]
let vlad: Person = ['Vlad', 32];
let vlad2 = ['Vlad', 32]

let v1 = vlad[0]
let v2 = vlad[1]

const [name, age] = vlad

// function getUserName([name, age]: Person) {
//     name.toUpperCase()
//     age.toFixed()

//     return name
// }
// getUserName(vlad)


function getUserName(user: (string | number)[]) {
    user.forEach(element => {
        if (typeof element === 'string') {
            element.toUpperCase()
        } else {
            element.toFixed()
        }
    })
}
getUserName(vlad)


////////////////

type TAnimal = {
    name: string;
    voice: string;
    wool: boolean;
};
interface IAnimal {
    name: string;
    voice: string;
    wool: boolean;
}

type TCat = {
    climb: boolean;
} & TAnimal
type TDog = {
    friendly: boolean;
} & TAnimal


const cat: TCat = {
    name: 'Mursik',
    voice: 'may',
    wool: false,
    climb: true
}
const dog: TDog = {
    name: 'Rex',
    voice: 'gav',
    wool: true,
    friendly: true
}
// type guard
function isCat(pet: TCat | TDog): pet is TCat {
    return (pet as TCat).climb !== undefined
}


function playWitnPet(pet: TCat | TDog) {
    if (isCat(pet)) {
        pet.climb
        console.log('play with cat')
    } else {
        pet.friendly
        console.log('play with dog')
    } else {
        let a: never
        //не дойдет сюда
    }
}

function isDog(pet: TCat | TDog): pet is TDog {
    return (pet as TDog).friendly !== undefined
}


function playWitnPet2(pet: TCat | TDog) {
    if (isCat(pet)) {
        pet.climb
        console.log('play with cat')
    } else {
        pet.friendly
        console.log('play with dog')
    }
}

playWitnPet(cat)
playWitnPet(dog)

////////
const box = document.querySelector('.box') as HTMLElement
// box?.textContent = 'some text'
const input = document.querySelector('input') as HTMLInputElement
input.value
// const a = document.querySelector('a') as HTMLAnchorElement
// a.click
const aAll = document.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>
aAll.forEach((el) => {

})


/////////////////////////////////





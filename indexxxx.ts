// interface IFormData {
//     email: string;
//     title: string;
//     text: string;
//     checkbox: boolean;
// }


// const formData: IFormData = {
//     email: "",
//     title: "",
//     text: "",
//     checkbox: false,
// };
// const form = document.querySelector('form') as HTMLFormElement;
// const email = document.querySelector('#email') as HTMLInputElement;
// const title = document.querySelector('#text') as HTMLInputElement;
// const text = document.querySelector('#email') as HTMLTextAreaElement;
// const ckeckbox = document.querySelector('#ckeckbox') as HTMLInputElement;

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     formData.email = email.value ?? ''
//     formData.title = title.value ?? ''
//     formData.text = text.value ?? ''
//     formData.checkbox = email.checked ?? false

//     if (validateFormData(formData)) {
//         checkFormData(formData)
//     }
// })


// // Последовательность действий:
// // 1) Происходит submit любой из форм
// // 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// // 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// // 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
// function validateFormData(data: IFormData): boolean {
//     const arrValues = Object.values(data)

//     const isValid = arrValues.every((value) => value)



//     if (isValid) {
//         return true;
//     } else {
//         console.log("Please, complete all fields");
//         return false;
//     }
// }

// function checkFormData(data: IFormData): void {
//     const { email } = data;
//     const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];


//     const isNotValid = emails.some((value) => value === email)
//     // Если email совпадает хотя бы с одним из массива
//     if (isNotValid) {
//         console.log("This email is already exist");
//     } else {
//         console.log("Posting data...");
//             }
//         }



/////////////////////////////////////
//////  деструктуризация типов

interface IuserDataForLog {
    isBircday: boolean,
    userName: string,
    age: number,
    extraKey: string,
    message: {
        text: string,
    },
    cars: ['bmw', 'volvo']
}
const userDataForLog: IuserDataForLog = {
    isBircday: true,
    userName: 'vlad',
    age: 32,
    extraKey: 'some mext',
    message: {
        text: 'error'
    },
    cars: ['bmw', 'volvo']
};

type TLogUser = (data: IuserDataForLog) => void

const copyLogUser: TLogUser = logUser

copyLogUser(userDataForLog)

const copyLogUser2: TLogUser = function (data) {
    console.log(data.cars[0]);
}

function logUser({
    isBircday,
    userName,
    age,
    extraKey,
    message: { text },
    cars: [car1, car2]
}: IuserDataForLog) {

    console.log(isBircday),
        console.log(userName),
        console.log(age),
        console.log(extraKey),
        console.log(text),
        console.log(car1),
        console.log(car2),
}

logUser(userDataForLog);

// типизация функций

type TServer = {
    protocol: 'http' | 'https';
    port: 3000 | 3001;
    log: (msg: string) => void
}

const server: TServer = {
    protocol: 'http', // 'https'
    port: 3000,
    log(msg) {
        console.log(msg)
    }
}

type TStarServer = (protocol: string, server: number, log: (msg: string) => void) => string;

const startServer = (protocol: 'https' | 'http', server: number, log: (msg: string) => void): string => {
    log(`server started on ${protocol}, server: ${server}`)
    return 'Stsrt server'
}

const startServer2: TStarServer = (protocol, server, log) => {
    log(`server started on ${protocol}, server: ${server}`)
    return 'Stsrt server'
}
startServer(server.protocol, server.port, server.log)

///////////////////////////

interface IStyles {
    [K: string]: string
}

const styles = {
    position: 'relative',
    top: '0',
    left: '0',
    righr: '0'
}


//////////////////////
//keyof



/////////////////////////////////
////запрос типов
const PI = 3.14;
// let PI = 3.14
const clonePI: typeof PI = 3.14

const dataFromBazaDatas = {
    water: 200,
    el: 350,
    price: 'local',
} as const

function checkData(data: typeof dataFromBazaDatas): boolean {
    const dataFromUser = {
        water: 200,
        el: 350
    }
    return  dataFromUser.water === data.water && dataFromUser.el === data.water
}
checkData(dataFromBazaDatas)

///////////////////////////////
//дженерики - на след.занятии

/////////////////////////////////////////
//// примеры
const totalData: TotalWarehouse = {
    cookers: "empty",
    hats: 2123,
    date: new Date(),
    deficit: false,
    jackets: "empty",
    mixers: 2123,
    pants: 5552
    paper: "empty",
    scissors: 21,
    socks: 1
}
type ValidAmount = 'empty' | number; 

interface ClothesWarehouse {
  jackets: ValidAmount;
  hats: ValidAmount;
  socks: ValidAmount;
  pants: ValidAmount;
}

interface StationeryWarehouse {
  scissors: ValidAmount;
  paper: 'empty' | boolean;
}

interface AppliancesWarehouse {
  dishwashers: ValidAmount;
  cookers: ValidAmount;
  mixers: ValidAmount;
}

interface TotalWarehouse
  extends ClothesWarehouse,
    StationeryWarehouse,
    AppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

function printReport (data: TotalWarehouse) {
// если есть empty => то выводим сообщение что " нужны следующие элементы одежды:...."
// если нет empty => выводим сообщение 'все в наличии'
}
printReport(totalData)
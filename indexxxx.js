"use strict";
// interface IFormData {
//     email: string;
//     title: string;
//     text: string;
//     checkbox: boolean;
// }
const userDataForLog = {
    isBircday: true,
    userName: 'vlad',
    age: 32,
    extraKey: 'some mext',
    message: {
        text: 'error'
    },
    cars: ['bmw', 'volvo']
};
const copyLogUser = logUser;
copyLogUser(userDataForLog);
const copyLogUser2 = function (data) {
    console.log(data.cars[0]);
};
function logUser({ isBircday, userName, age, extraKey, message: { text }, cars: [car1, car2] }) {
    console.log(isBircday),
        console.log(userName),
        console.log(age),
        console.log(extraKey),
        console.log(text),
        console.log(car1),
        console.log(car2),
    ;
}
logUser(userDataForLog);
const server = {
    protocol: 'http', // 'https'
    port: 3000,
    log(msg) {
        console.log(msg);
    }
};
const startServer = (protocol, server, log) => {
    log(`server started on ${protocol}, server: ${server}`);
    return 'Stsrt server';
};
const startServer2 = (protocol, server, log) => {
    log(`server started on ${protocol}, server: ${server}`);
    return 'Stsrt server';
};
startServer(server.protocol, server.port, server.log);
const styles = {
    position: 'relative',
    top: '0',
    left: '0',
    righr: '0'
};
//////////////////////
//keyof
/////////////////////////////////
////запрос типов
const PI = 3.14;
// let PI = 3.14
const clonePI = 3.14;
const dataFromBazaDatas = {
    water: 200,
    el: 350,
    price: 'local',
};
function checkData(data) {
    const dataFromUser = {
        water: 200,
        el: 350
    };
    return dataFromUser.water === data.water && dataFromUser.el === data.water;
}
checkData(dataFromBazaDatas);
const dataObj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
};
const dataObj2 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value3',
    key5: 'value3',
};
const dataObj1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
};
const data3 = [['key1', 2]];
const data = [
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
];
const data2 = Object.entries(dataObj1);
const totalData = {
    cookers: "empty",
    hats: 2123,
    date: new Date(),
    deficit: false,
    jackets: "empty",
    mixers: 2123,
    pants: 5552,
    paper: "empty",
    scissors: 21,
    socks: 1
};
const totalData = {
    cookers: "empty",
    hats: 2123,
    date: new Date(),
    deficit: false,
    jackets: "empty",
    mixers: 2123,
    pants: 5552,
    paper: "empty",
    scissors: 21,
    socks: 1
};
function printReport(data) {
    // const arr1: string[] = []
    let result = Object.entries(data).filter(([key, value]) => value === 'empty').reduce((acc, [key, value]) => `${acc} ${key}`, '');
    if (result.trim().length) {
        return `нужны следующие элементы : ${result.slice(0, -1)}!`;
    }
    else {
        return `все в наличие`;
    }
}
// если есть empty => то выводим сообщение что " нужны следующие элементы одежды:...."
// если нет empty => выводим сообщение 'все в наличии'
console.log(printReport(totalData));

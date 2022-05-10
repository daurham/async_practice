/* Treat this as your client code */
const axios = require('axios');
const asyncFns = require('./async_functions.js');
const url = 'http://localhost:3000';
const file = 'file.txt';

const start = () => console.log('1). Start'); // RUN before the async function
const end = () => console.log('3). End'); // RUN after the async function

/* 1). POST data from the url. Should log:
Start
Created data
End
*/
const postData = () => {
  start();
  asyncFns.postData(url, { bcs: 20 })
    .then((res) => console.log('2). Created data'))
    .then(() => end());
};

/* 2). GET data from the url */
const getData = () => {
};

/* 3). UPDATE data from the url */
/* 4). DELETE data from the url */

/* 5). Tinker with other async functions */
const task5 = () => {
  start();
  asyncFns.asyncTask5()
    .then((res) => res)
    .then(() => end()); // setTimeout wont work the same. 
}

postData();
// getData();


// task5();
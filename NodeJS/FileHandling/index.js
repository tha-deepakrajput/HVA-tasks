const fs = require('fs');

// // To create the file
// fs.writeFile('./message.txt', 'Hello World', () => {});

// // To read the file
// fs.readFile('./message.txt', 'utf-8', (err, result) => {
//   if(err) {
//     console.log('Error : ', err);
//   }
//   else {
//     console.log('Result : ', result);
//   }
// });

// // To append anything in the file 
// fs.appendFile('./message.txt', 'Hey there', () => {});

// To delete the file 
fs.unlink('./message.txt', () => {});
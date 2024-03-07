//this index.js which contains function isValidateSAPhoneNumber
const isValidateSAPhoneNumber = (cellphoneNumber) => {
    const regex = /^(\+27|0)[6-8][0-9]{8}$/;
    return regex.test(cellphoneNumber);
   };
   const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   readline.question('Please enter your cellphone number =) \n',
   (cellphoneNumber) => {
    if (isValidateSAPhoneNumber(cellphoneNumber)) {
    console.log('Cellphone number is valid =)');
    } else {
    console.log('Cellphone number is invalid =(');
    }
    readline.close();
   });
   
   module.exports = isValidateSAPhoneNumber;
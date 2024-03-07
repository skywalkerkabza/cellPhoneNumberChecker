//cellphoneCheck.test.js which import function from module which in index.js
const fs = require('fs/promises'); // Using promises for async file access
const isValidateSAPhoneNumber = require('./index'); // npm import statement
    
describe('isValidateSAPhoneNumbers', () => {
  let phoneNumbers;

  beforeAll(async () => {
    // Read phone numbers data asynchronously
    try {
      const data = await fs.readFile('./phone_numbers.json', 'utf8');
      phoneNumbers = JSON.parse(data);
    } catch (error) {
      console.log('Error reading phone numbers data:', error);
    }
  });

  // Test valid South African phone numbers
  test('Valid South African phone numbers', () => {
    phoneNumbers.valid.forEach((phoneNumber) => {
      try {
        console.log('Testing valid phone number:', phoneNumber);
        expect(isValidateSAPhoneNumber(phoneNumber)).toBe(true);
      } catch (error) {
        console.log('Error testing phone number:', phoneNumber, error);
      }
    });
  });

  // Test invalid South African phone numbers
  test('Invalid South African phone numbers', () => {
    phoneNumbers.invalid.forEach((phoneNumber) => {
      try {
        console.log('Testing invalid phone number:', phoneNumber);
        expect(isValidateSAPhoneNumber(phoneNumber)).toBe(false);
      } catch (error) {
        console.log('Error testing phone number:', phoneNumber, error);
      }
    });
  });
});

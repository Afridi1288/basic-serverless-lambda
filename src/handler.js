'use strict';

module.exports.generateRandomNumber = event => {
  const randomNumber = parseInt(Math.random()*100);
  console.log('The random generated number(Integer) is: ', randomNumber);
  return randomNumber;
};

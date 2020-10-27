const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let catsCounter = 0
     for (let i = 0; i <arr.length; i++){
         arr[i].forEach((word)=>{
             word === '^^' ? catsCounter++ : false
         })
     }
  return catsCounter
};

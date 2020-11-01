const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let turn = Math.pow(2,disksNumber) - 1

  let transferPerSec = turnsSpeed/3600

  let second = turn/transferPerSec 
  let a = new Object();
  a  = {     
    turns: turn, seconds: Math.trunc(second )     
  };
  return a
    };


  

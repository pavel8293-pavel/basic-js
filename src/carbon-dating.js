const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(string) {
  let k = 0.693
  let activity
  if(string === null || string === undefined || typeof string !== "string" || isNaN(+string) || +string <=0 || +string >= 15 ){
    return false
  }else{
    activity = Math.log(MODERN_ACTIVITY / Number(string)) / k * HALF_LIFE_PERIOD
    return activity
  }

};


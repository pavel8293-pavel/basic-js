const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === null || date === undefined){
      return "Unable to determine the time of year!"
  }else if(Object.prototype.toString.call(date).match(['object Date']).index !== 1){
      return "THROWN"
  }else{
    if(typeof date !== 'object'){
      return "THROWN"
    }else{
      let current = new Date();
      let month = date.getMonth();
        if (current.toString() === date.toString()){
          return "THROWN"
        }else{
          if (month >=5 && month<8){return 'summer'
          }else if(month >=8 && month<11){return 'autumn'
          }else if(month >=11 && month<13 ||month >=0 && month<2){return 'winter'
          }else if(month >=2 && month<5){return 'spring'
          }else{return "FAIL"}
      }
    }
  }
}
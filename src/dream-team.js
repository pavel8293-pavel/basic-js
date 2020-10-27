const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  let fail = "FAIL"
  let firstLetter=[]
  let trimed
  if(array === null || array === undefined || array.length === undefined){
    return false
  }else if(array.length === 0){
      return fail
  }else if(typeof array !== "object"){
      return false
  }else{
      let textArray = array.filter( word => typeof word === 'string' &&  word.length > 1 );
      textArray.forEach((word)=>{
          trimed = word.trim()
          console.log(trimed)         
          firstLetter += trimed.substr(0,1)  
          })  
          console.log(firstLetter)
          console.log(textArray)
       firstLetter =firstLetter.toUpperCase().split('').sort().join('')
      return firstLetter
  }

}
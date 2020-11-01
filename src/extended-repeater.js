const CustomError = require("../extensions/custom-error");

module.exports =function repeater( str, options ) {
  let newOptions = options;
  let string = str;
  let main = "";


  if(!newOptions.separator  && +newOptions.repeatTimes === 1){
      console.log(string + ' 1str')
      main =  string
  }else if((!newOptions.separator && +newOptions.repeatTimes > 1)){
      tempVal = string + "+";
      console.log(string + ' 2str')
      let temp = ""
      for(let n = 0; n < +newOptions.repeatTimes - 1; n++){
          temp += tempVal;
      }
      temp += string;
      main = temp
          console.log(temp + ' 1 temp')   
  }else if(newOptions.separator && +newOptions.repeatTimes > 1 && !newOptions.additionRepeatTimes){
      tempVal = string + newOptions.separator.toString();
      console.log(string + ' 3str')
      let temp = ""
      for(let n = 0; n < +newOptions.repeatTimes - 1; n++){
          temp += tempVal;
      }
      temp += string;
      main = temp
          console.log(temp + ' 4 temp')   
  }else if(newOptions.separator && +newOptions.repeatTimes > 1 && newOptions.addition && newOptions.additionRepeatTimes === 1 && !newOptions.additionSeparator){
      tempVal = string + newOptions.addition.toString()+newOptions.separator.toString()
      console.log(string + ' 5str')
      let temp = ""
      for(let n = 0; n < +newOptions.repeatTimes - 1; n++){
          temp += tempVal;
      }
      temp += string.concat(newOptions.addition);
      main = temp
          console.log(temp + ' 5 temp')   
  }else if(newOptions.separator && !newOptions.repeatTimes && newOptions.addition && !newOptions.additionRepeatTimes){
      main = string + newOptions.addition
        console.log(main + ' 5 temp')   
  }else if(newOptions.separator && newOptions.repeatTimes && newOptions.addition || newOptions.addition === false || newOptions.addition === null && newOptions.additionRepeatTimes){
      
    if(newOptions.addition === false ){
      newOptions.addition = "false" 
    }else if(newOptions.addition === null){
      newOptions.addition = "null"
    }else{newOptions.addition}
    
      let TempAdition = newOptions.addition.toString()
      console.log(TempAdition + "   temp")
      let add = TempAdition + newOptions.additionSeparator
      let add1 = ''
      for(let i = 0; i < newOptions.additionRepeatTimes - 1; i++ ){
          add1 += add
      }
      add1 = add1 + TempAdition
      console.log('add1  ' + add1)
      let add2 =string + add1 
      console.log('add2  ' + add2)
      let add3 = add2 + newOptions.separator
      let add4 = ''
      for(let j = 0; j < newOptions.repeatTimes - 1; j++){
          add4 += add3
      }

      main = add4 + add2
      console.log(main)
  }
  return main
}
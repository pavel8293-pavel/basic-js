const CustomError = require("../extensions/custom-error");

module.exports =function transform(array) {
    if(array === null || array === undefined || typeof array !== 'object'){
        throw new Error('THROWN')
    }else{
        let tempArray = []
        for (let i = 0; i < array.length; i++){
            if(array[i] !== '--discard-next' && array[i] !== '--discard-prev' && array[i] !== '--double-next' && array[i] !== '--double-prev'){
                tempArray.push(array[i])
            }else{
                if(array[i] === '--discard-next'){
                    if(array[-1] === '--discard-next'){
                        tempArray=tempArray
                    }else{
                        tempArray.push('')
                        i+=2
                    }
                }else if(array[i] === '--discard-prev'){
                    if(array[0] === '--discard-prev'){
                        tempArray=tempArray
                    }else{
                        tempArray.pop()
                        tempArray.push('')
                    }
                }else if(array[i] === '--double-next'){
                    if(array[-1] === '--double-next'){
                        tempArray = tempArray
                    }else{                    
                        tempArray.push(array[i + 1])}
                }else if(array[i] === '--double-prev'){
                    if(array[0] === '--double-prev'){
                        tempArray = tempArray
                    }else{tempArray.push(array[i-1])}        
                }
            }   
        }
 let arr = tempArray.filter(e => e)
 return arr

    }
  };
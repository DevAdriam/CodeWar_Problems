function multiplyNumber (amount: number){
    let total = 0
    let numArr = amount.toString().split("")
    for(let i = 0 ; i < numArr.length ; i++){
       if(total === 0){
         total = Number(numArr[i])
       }else {
         total = total * Number(numArr[i])
       }
    }
    if(total >= 10){
      return multiplyNumber(total)
    }else {
      return total
    }
  }
  
  function persistence(num: number) {
    if(num >= 10){
    num = multiplyNumber(num)
    }
    return num
  }
  console.log(persistence(67));
  
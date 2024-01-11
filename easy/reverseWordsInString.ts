
function reverseWords(str : string) {
    let wordArr : any= str.split(' ')
    
    let nestedWordArr : string[] = []
    let resultArr  : string[]= []
   
   for(const words  of wordArr){
     nestedWordArr.push(words.split())
   }
   
   for(const nestedWord of nestedWordArr){
     for(const innerWord of nestedWord){
     resultArr.push(innerWord.split('').reverse().join(''))
     }
   }
   
   console.log(resultArr)
   
   return resultArr.join(' ')
 }
export function checkUniqueSymbols(inputStr) {
    let arr = [];
    if(inputStr.length === 1){
        return true;
    }
    if (inputStr) {
        for (let i=0; i<inputStr.length; i++) {
            if (arr[inputStr[i]]) {
                arr[inputStr[i]] += 1;
                return false;

            } else {
                arr[inputStr[i]] = 1;
            }
        }
        return true;
    }
    return false;

console.log(checkUniqueSymbols('ascdfghjk'))
}
 export function checkUniqueSymbolsSet(inputStr) {
    if(inputStr.length === 1 || inputStr.length === 0){
        return true;
    }
    let unique = [...new Set(inputStr)];
    if(inputStr.length === unique.length){
      return true;
     } 
    return false;
    
}
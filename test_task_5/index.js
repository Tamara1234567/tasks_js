export function simpleCompressionOfStr(str){
    str = str.toLowerCase().replace(/\s/g, '');
    let str2=[];
    let newstr = '';
    for(let i in str){
        if (str2[str[i]]!=undefined) {
            (str2[str[i]]++);
    
    }
        else {
          (str2[str[i]]=1);
        }
    }
        for(let letter in str2){
            newstr += letter + str2[letter];
        }
    let result  = ( newstr.length >= str.length) ? str : newstr;
    return result;
    }
   // console.log(simpleCompressionOfStr('alaldkdkfjfjgtr'));
    //console.log(simpleCompressionOfStr('hisfsfvgisgisdfvsgvi'));
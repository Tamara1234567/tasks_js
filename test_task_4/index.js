export function reshuffLineToPollinom(str){
str = str.replace(/\s/g, '');
let str2=[];
let newStr = [];
for(let i  in str){
    if (str2[str[i]]!=undefined) {
        (str2[str[i]]++);

}
    else {
      (str2[str[i]]=1);
    }

}
let count = 0;
for (let i in str2){
    let num = str2[i] % 2;
    if ((str2[i] % 2) != 0){
        count++;
    }
}
if(str.length % 2 === 0 && count === 0)
 {return true;}
 if(str.length % 2 != 0 && count ===1)
 {return true;}
 return false;
}
//console.log(reshuffLineToPollinom('11223344559988776'));
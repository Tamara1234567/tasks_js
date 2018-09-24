export function isPermutation(str1,str2) {
    if(str1.length === str2.length){
    return str1.split('').sort().join('') === str2.split('').sort().join('');
    }
    return false;
}
//console.log(isPermutation('1234567','7612543'));


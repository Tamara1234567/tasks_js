export function changeSpaceForCharacter(str,char){
    str = str.replace(/^\s+|\s+$/g, "");
    let arr = str.split('');
    for (let i=0; i<arr.length; i++){
        if(arr[i] === " " ){
            arr[i] = '%20';
        }
      }
      arr = arr.join('');
      return arr;
    }
  //console.log(changeSpaceForCharacter('ra    sdhjf    ','%20'));


console.log("working");


let set  = new Set();
function removeDuplicate(str,n){
    for(let i=0;i<str.length;i++){
         set.add(str[i]);
    }
    let str1 = " ";
    for(let val of set.values()){
          str1+= val;
    }
    console.log(str1);
}
removeDuplicate("aabbccddeeff")
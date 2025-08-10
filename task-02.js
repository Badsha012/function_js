function isArray(array,find) {
    let c=0;
    for(const number of array){
        if(number===find){
          c++;
        }
          
    }
    return c;
    
}
const array =[5,6,11,12,98,5];
console.log(isArray(array,5));
console.log(isArray(array,25)); 
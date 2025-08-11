function sumOfArray(arr){
    let sum=0;
    if(Array.isArray(arr)==false){
        return "Invalid";
    }
    for(let number of arr){
        sum =sum+number;
    }
    return sum;
}
// let d=sumOfArray([1,2,3]);
let d=sumOfArray([3,7,8]);
console.log(d);

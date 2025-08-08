function add(a,b) {
    const sum =a+b;
    return sum;
    
}
const bill=add(5,7);
console.log(bill);



//add
function add2(x,y) {
    return x+y;
    
}
 const r=add2(5,8);
console.log(r);



function doMath(num1,num2) {
    const sum =num1+num2;
    const diff=num1-num2;
    const mul=sum*diff;
    const result=mul/2;
    return result;

    
}
const math=doMath(77,66);
console.log(math);



function eachEven(number ){
    if(number %2==0){
        return true;
    }
    else{
        return false;
    }
    
}
console.log(eachEven(5));

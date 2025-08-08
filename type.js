/**
 * for a give string tell me whethar is has even number of character or not
 * 
 * 
 * 
 */
function evenSizetring(str) {

    const size=str.length;
    if(size % 2===0){
        console.log('even size');

    }
    else{
        console.log('Odd size');
    }
    console.log(str,size);

    
}
evenSizetring('dhaka');
evenSizetring('faka');





function doubleorTriplen(number ,doDuble) {
    if(doDuble === true){
        const result=number*2;
        return result;
    }
    else{
        const result=number*3;
        return result;
    }
    
}
console.log(doubleorTriplen(5,true));
console.log(doubleorTriplen(5,false));
// 12 inch 1 feet


function infoFeet(inch) {
    const feet=inch/12;
    return feet;

    
}

function infoFeet2(inch) {
    const feetf=inch/12;
    const feetn=parseInt(feetf);

    const inchR=inch % 12;
    const result=feetn  +  ' ft ' + inchR  + ' inch ';
    return result;
    
}
const shuvoFeet=infoFeet(75);
console.log(shuvoFeet);
const  shouvoFeet2=infoFeet2(75);
console.log(shouvoFeet2);




function mileTokill(mile){
    const m=mile *1.60934;
    return m;

}
const kill=mileTokill(34);
console.log(kill);



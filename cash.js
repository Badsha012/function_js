function cashOut(money) {

    if(money < 0 || typeof money != "number"){
        return "Invalid";
    }
    let charge=money*0.0175;
    let fixsize=charge.toFixed(4);
    let final=parseFloat(fixsize);
    return final;
    
}
console.log(cashOut("mewauu"));
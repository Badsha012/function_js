

function leapYear(year) {
    if(year %4 ===0){

        return true;
    }
        else{
            return false;
        }
    
    
}
const leapyear=leapYear(2024);
console.log(leapyear);


function isLeapyear(year) {
    if(year % 100 !==0 && year % 4===0){
        return true;
    }
    if(year % 100===0 && year % 400 ===0){
        return true;
    }
    else{
        return false;
    }
    
}
const islipi=isLeapyear(2052);
console.log(islipi);
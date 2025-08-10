//min number
const lowest=[33,55,66,21,44,77,30];
function getMin(num) {
    let min=lowest[0];
    for(const ele of num){
        
        if(ele<min){
            min=ele;
        }
    }
    return min;
    
}
const x=getMin(lowest);
console.log('Lowest value:',x);
const price=[20000,6000,12000,100000,30000,35000];
function getMimum(numbers) {
    let minmum=price[0];
    for(const num of numbers){
        if(minmum>num){
            minmum=num;
        }
    }
    return minmum;
    
}
const t=getMimum(price);
console.log('minimumumber:',t);


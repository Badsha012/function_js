const heighs=[65,78,68,72,60,75,34,66];

function getMax(numbers) {
      let mx=heighs[0];
    for(const number of numbers){

        //let mx=number;
        if(number>mx){
            mx=number;

        }
        //console.log(number);
    }
    return mx;
    
}
const num=getMax(heighs);
console.log(num);

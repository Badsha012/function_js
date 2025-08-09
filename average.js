

//average number


function isOdd(numbers) {
    const odds=[];
  for(const number of numbers){
    //console.log(number);
    if(number %2===1){
        // console.log(number);
        odds.push(number);
    }
  }
//   console.log(odds);
let sum=0;
for(const number of odds){
    sum =sum+number

}
const len=odds.length;
console.log(len);
console.log(sum);
const averge=sum/len;
console.log('The average number',averge);
    
}
const numbers=[42,13,65,81,7,9];
const avg=isOdd(numbers);
 console.log( 'The averageoddd number:',avg);

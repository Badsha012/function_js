/**
 * create function that will return the value
 * the um of odd number
 * the off even number
 * 
 */
function evenNumber(numbers) {
    const evens=[];
    for(const number of numbers){
       // console.log(number);
        if(number % 2=== 0){
            console.log(number);
            evens.push(number);
            //  return evens;
        }
    }
      return evens;
    
}
const numbers=[5,8,91,24,6];
//  const evens=evenNumber(numbers);
//  console.log('evens:',evens);


 function evenOfSum(numbers) {
    let sum=0;

    for(number of numbers){
        if(number % 2==-0){
            console.log(number);
            sum=sum+number;

        }
        //  sum=sum+number;
    }
    return sum;
    
 }
 const sum=evenOfSum(numbers);
 console.log('Sum of the even:',sum);

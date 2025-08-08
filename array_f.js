/**8
 * objecve write a function to gic-ve me the of all umber in a array
 * step-01: declare a function ;
 * step-02: call check wheter te function is called proerty;
 * ster-03:set parameter
 * 
 */

function sumofNumbesr(numbers) {
    let sum=0;

    for(const number of numbers){
    console.log(number);
    sum=sum+number;
    // return sum;
    }
    return sum;
}
const numbs=[54,62,12,6];
const sum=sumofNumbesr(numbs);
//const sum=sumofNumbesr();
console.log('sum of number:',sum);
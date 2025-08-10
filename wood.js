/**
 * 
 * chair ---> 3 cft
 * table --->10 cft
 * bed --->50cft
 */


function woodQuntity(chair,table,bed){
    const perchairwood=3;
    const pertablewood=10;
    const perbedwood=50;
    


    const allchair=chair *perchairwood;
    const alltabe=table *pertablewood;
    const allbed=bed *perbedwood;
    const total=allchair+alltabe+allbed;
    return total;
}
const totalwood=woodQuntity(8,3,1);
console.log(totalwood);
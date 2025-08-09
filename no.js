/**
 * array has some
 * 
 */

const biry=['abul','babul','cabul','dabul','kabul','abul','cabul'];
const number=[1,5,61,5,8,7,5,81,61];
  function noDuplicate(array) {
    const un=[];
    for(const  item of array) {
      if(un.includes(item)===false){
        un.push(item);
      }


    }

 return un;

    // console.log(array);
  }
const x=noDuplicate(biry);
console.log(x);
const products = [
  { name: "shampoo", price: 400,quatity:2 },

  { name: "chiruni", price: 100, quatity:3 },
  { name: "T_shart", price: 700,quatity:5  },
  { name: "pant", price: 1400,quatity:1  }
  
]
function carTotal(products) {

    let sum=0;
    for(const prduct of products){
        // console.log(prduct);
        const thisP=prduct.price * prduct.quatity;
        sum =sum+thisP;
    }
    return sum;
}
const total=carTotal(products);
console.log(total);
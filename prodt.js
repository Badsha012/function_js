const products = [
  { name: "shampoo", price: 400 },

  { name: "chiruni", price: 100 },
  { name: "T_shart", price: 700 },
  { name: "pant", price: 1400 }
  
]
function  getProduct(products) {
    let sum=0;
    for(const prduct of products){
        sum=sum+prduct.price;

    }

    return sum;
}
const t=getProduct(products);
console.log('total price:',t);


const mobiles=[

    {name:'redmi',price:30000,camara:'50mp',color:'green'},
    {name:'iphone',price:100000,camara:'150mp',color:'white'},
    {name:'samsung',price:20000,camara:'30mp',color:'black'},
    {name:'oppo',price:50000,camara:'58mp',color:'green'},
    {name:'walton',price:10000,camara:'13mp',color:'green'},
    {name:'itel',price:20000,camara:'50mp',color:'green'},
]
function getPhone(mobiles) {
    // console.log(mobiles);
    let min=mobiles[0];
    for(const phone of mobiles){
        //console.log(phone);
        if(min.price>phone.price){
            min=phone;
        }

    }
    return min;
    
}
const chap=getPhone(mobiles);
console.log('chapest phone',chap);
interface Product {
    id:number,
    name:string,
}

const product1 : Product = 
{
    id:1, name:"Hi"
};


const product2 = 
{
    id:1, name:"Hi", description:"Good Product"
};


const myFunction=(p:Product):void=>{
    console.log(p);
}

myFunction(product1);
myFunction(product2);

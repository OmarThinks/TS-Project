interface Product1 {
  name:string,
  description: string,
  price: number,
  amount:any
}

interface Product2 extends Product1{
  amount:number
}



const p1 : Product1&Product2 = {
  name:"kjdhjksadf",
  description: "afkfhdkj",
  price: 123,
  amount:400
}






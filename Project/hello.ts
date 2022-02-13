interface Shape {
  readonly style: string;
}



let myShape: Shape ={style:"My Style"};


console.log(myShape);



myShape={...myShape, style:"Hi"};

console.log(myShape);














function helloWorldGenerics<Type>(input:Type):Type{
  return input;
}




helloWorldGenerics<string|number>(1);


function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity :(<Type>(arg:Type)=>Type) 
= <Type>(arg:Type)=>{return arg;};













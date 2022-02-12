

function map<Input, Output>(
    arr:Input[], func:(arr:Input)=>Output):Output[]{
        return arr.map(func)
    }


function longest<Type extends {length:number}>(
    a:Type, b:Type) : Type
{
    if(a.length>b.length){return a;}
    return b;
}




function combine<Type>(arr1:Type[], arr2:Type[]):Type[]
{
    return arr1.concat(arr2);
}



combine<string|number>([1,2,3], ["Hello"]);




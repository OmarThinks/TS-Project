type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }


  const myFn:DescribableFunction = (someArg) => {
    return someArg > 5;
  };
  myFn.description = 'checks if arg is greater than 5';


  doSomething(myFn);



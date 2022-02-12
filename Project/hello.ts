type voidFunc = () => void;
 
const f1: voidFunc = () => {
  return true;
};
 
const f2: voidFunc = () => true;
 
const f3: voidFunc = function () {
  return true;
};











const v1 = f1();
 
const v2 = f2();
 
const v3 = f3();



console.log(typeof v1, v2, v3);

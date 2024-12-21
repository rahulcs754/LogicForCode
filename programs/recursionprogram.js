// Factorial program  like as 5  =   120

const factorialFun = (num) => {
    let fact = 1;
    if (num == 0 || num == 1) {
      return 1;
    }
    for (let i = 2; i <= num; i++) {
      fact = fact * i;
    }
    return fact;
  };
  
  //based on recursion
  const factorialFunRecursion = (num) => {
    if (num == 0 || num == 1) {
      return 1;
    }
    return num * factorialFunRecursion(num - 1);
  };
  
  console.log(factorialFunRecursion(5));
  
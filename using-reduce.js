function adder(arr, initialval = 0) {
    const sumwithinitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialval)
    return sumwithinitial
}

function sumOrMul(arr, initialval =0) {
    return arr.reduce((acc, num) => {
      // Check if the number is even or odd
      if (num % 2 === 0) {
        // Even number: multiply
        return acc * num;
      } else {
        // Odd number: add
        return acc + num;
      }
    }, initialval); 
}

function funcExec(funcs, initialValue = 0) {
    return funcs.reduce((acc, func) => func(acc), initialValue);
  }

  console.log(adder([9, 24, 7, 11, 3], 10))

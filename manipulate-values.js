function filterValues(obj, callback) {
  let res = {}
  for (let key in obj){
    if (callback(obj[key])) {
      res[key] = obj[key]
    }
  }
  return res
    // return Object.fromEntries(
    //   Object.entries(obj).filter(([key, value]) => callback(value))
    // );
  }
  
  function mapValues(obj, callback) {
    let res = {}
    for (let key in obj){
      res[key] = callback(obj[key])
    }
    return res
    // return Object.fromEntries(
    //   Object.entries(obj).map(([key, value]) => [key, callback(value)])
    // );
  }
  
  function reduceValues(obj, callback, initialValue = 0) {
    // let res = 0
    for (let key in obj){
      initialValue = callback(obj[key], initialValue)
      // res += obj[key]
    }
    return initialValue
    // return res
    // return Object.values(obj).reduce(callback, initialValue);
  }
  
  // Test the functions with examples
  const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
  const n = { a: 1, b: 2, c: 3 }
  
  console.log(filterValues(nutrients, (nutrient) => nutrient <= 12));
  // Output: { carbohydrates: 12, fat: 5 }
  
  console.log(mapValues(nutrients, (v) => v + 1));
  // Output: { carbohydrates: 13, protein: 21, fat: 6 }
  
  console.log(reduceValues(n, (acc, cr) => acc + cr));
  // Output: 37
  
function filterKeys(obj, callback) {
    let res = {};
    for (let key in obj) {
      if (callback(key)) {
        res[key] = obj[key];  // Keep the original value but filter by key
      }
    }
    return res;
  }
  function mapKeys(obj, callback) {
    let res = {};
    for (let key in obj) {
      let newKey = callback(key);  // Transform the key using the callback
      res[newKey] = obj[key];      // Keep the value but with the transformed key
    }
    return res;
  }
  function reduceKeys(obj, callback, initialValue = '') {
    for (let key in obj) {
      initialValue = callback(initialValue, key);  // Reduce the keys
    }
  
    // Perform slicing only if initialValue is a string
    if (typeof initialValue === 'string') {
      if (initialValue.slice(0, 2) === ', ') {
        return initialValue.slice(2);  // Remove leading ', '
      } 
      if (initialValue.slice(0, 1) === ':' && initialValue.slice(-1) !== ':') {
        return initialValue.slice(1);  // Remove leading ':' if necessary
      }
    }
  
    return initialValue;
  }

  const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }


//   console.log(reduceKeys(nutrients, (acc, cr) => `${acc}${cr}:`, ':'))
  
function forEach(arr, callback) {
    // Ensure that the first argument is an array and the second argument is a function
    if (!Array.isArray(arr) || typeof callback !== 'function') {
      throw new TypeError('Invalid arguments: First argument must be an array and second argument must be a function.');
    }
  
    // Iterate over each element of the array
    for (let i = 0; i < arr.length; i++) {
      // Call the callback function with the current element and its index
      callback(arr[i], i, arr);
    }
}

function map(arr, callback) {
  // Ensure that the first argument is an array and the second argument is a function
  if (!Array.isArray(arr) || typeof callback !== 'function') {
    throw new TypeError('Invalid arguments: First argument must be an array and second argument must be a function.');
  }

  // Create a new array to store the results
  const result = [];
 
  // Iterate over each element of the array
  for (let i = 0; i < arr.length; i++) {
    // Call the callback function with the current element, its index, and the original array
    // and push the result to the new array
    result.push(callback(arr[i], i, arr));
  }

  // Return the new array
  return result;
}
function flatMap(arr, fn) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const val = fn(arr[i], i, arr)
        if (Array.isArray(val)){
            result.push(...val)
        }else if (!undefined) {
            result.push(val)
        } else {
            result.push(undefined)
        }
    }
    return result
}

function reverse(arg) {
    // Use 'let' instead of 'const' for temp to allow modification
    let temp = '';

    // Create an array to store the result
    let result = [];

    // Loop through the input in reverse order
    for (let i = arg.length - 1; i >= 0; i--) {
        temp += arg[i]; // For strings
        result.push(arg[i]); // For arrays
    }

    // If the input is an array, return the reversed array
    if (Array.isArray(arg)) {
        return result;
    }

    return temp;
}

// Testing the function
console.log(reverse([1, 2, 3]));  // Output: [3, 2, 1]
console.log(reverse('abc'));      // Output: 'cba'

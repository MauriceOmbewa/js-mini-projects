function get(src, path) {
    // Split the path into keys by dot notation
    const keys = path.split('.');

    // Iterate through the keys to access the nested value
    let result = src;
    for (const key of keys) {
        // If the key exists in the current result, update the result
        if (result && key in result) {
            result = result[key];
        } else {
            // If any key is not found, return undefined
            return undefined;
        }
    }

    // Return the final value
    return result;
}

const src = { nested: { key: 'peekaboo' } };
const path = 'nested.key';
console.log(get(src, path)); // Output: 'peekaboo'

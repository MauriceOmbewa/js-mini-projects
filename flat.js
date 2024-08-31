function flat(arr, depth = 1) {
    if (depth < 1) {
        return arr.slice(); // Return a shallow copy if depth is less than 1
    }

    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            // Recursively flatten the array if the item is an array
            acc.push(...flat(item, depth - 1));
        } else {
            // Otherwise, just add the item to the accumulator
            acc.push(item);
        }
        return acc;
    }, []);
}


console.log(flat([0, 1, [2, [3, [4, 5]]]]));
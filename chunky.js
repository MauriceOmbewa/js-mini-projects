function chunk(arr, size) {
    if (size === 0) {
        return arr;
    }
    let chunkArray = [];

    for (let x = 0; x < arr.length; x += size) {
        let end = x + size;
        chunkArray.push(arr.slice(x, end));
    }
    return chunkArray;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0))
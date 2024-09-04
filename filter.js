function filter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function reject(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function partition(arr, callback) {
    const passed = [];
    const failed = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            passed.push(arr[i]);
        } else {
            failed.push(arr[i]);
        }
    }
    return [passed, failed];
}

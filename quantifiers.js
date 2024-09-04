function every(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i])) {
            return false; // If any element does not satisfy the condition, return false
        }
    }
    return true; // All elements satisfy the condition
}

function some(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return true; // If any element satisfies the condition, return true
        }
    }
    return false; // No elements satisfy the condition
}

function none(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return false; // If any element satisfies the condition, return false
        }
    }
    return true; // No elements satisfy the condition
}

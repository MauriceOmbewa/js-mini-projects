function fusion(obj1, obj2) {
    const result = {};
  
    for (const key in obj1) {
      if (key in obj2) {
        const val1 = obj1[key];
        const val2 = obj2[key];
  
        if (Array.isArray(val1) && Array.isArray(val2)) {
          result[key] = val1.concat(val2);
        } else if (typeof val1 === 'string' && typeof val2 === 'string') {
          result[key] = val1 + ' ' + val2;
        } else if (typeof val1 === 'number' && typeof val2 === 'number') {
          result[key] = val1 + val2;
        } else if (typeof val1 === 'object' && typeof val2 === 'object' && !Array.isArray(val1) && !Array.isArray(val2)) {
          result[key] = fusion(val1, val2); // Recursive merging
        } else {
          result[key] = val2; // Type mismatch, take value from obj2
        }
      } else {
        result[key] = obj1[key]; // Only in obj1
      }
    }
  
    for (const key in obj2) {
      if (!(key in obj1)) {
        result[key] = obj2[key]; // Only in obj2
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(fusion({ arr: [1, "2"] }, { arr: [2] })); 
  // -> { arr: [1, '2', 2] }
  
  console.log(fusion({ arr: [], arr1: [5] }, { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }));
  // -> { arr: [10, 3], arr1: [5, 15, 3], arr2: ['7', '1'] }
  
  console.log(fusion({ str: "salem" }, { str: "alem" }));
  // -> { str: 'salem alem' }
  
  console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }));
  // -> { a: 20, b: 10, c: 1 }
  
  console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }));
  // -> { a: 11, x: [], b: { c: 'Salem alem' } }
  
  console.log(fusion({ a: { b: [3, 2], c: { d: 8 } } }, { a: { b: [0, 3, 1], c: { d: 3 } } }));
  // -> { a: { b: [3, 2, 0, 3, 1], c: { d: 11 } } }
  
  console.log(fusion({ a: "hello", b: [] }, { a: 4 }));
  // -> { a: 4, b: [] }
  
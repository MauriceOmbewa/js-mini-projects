const escapeStr = '"\\/`\''
const arr = [4, '2'];
const obj = {
    str: 'Hello',
    num: 4,
    bool: false,
    undef: undefined,
}
const nested = {
    arr:[4, undefined, '2'],
    obj:{
        str:'recode your world',
        num: 43,
        bool: true,
    }
}
Object.freeze(obj);
Object.freeze(nested.obj);
Object.freeze(nested.arr);
Object.freeze(nested);
Object.freeze(arr)

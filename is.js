is.num = function(arg){
    return typeof arg === 'number';
}
is.nan = function(arg){
    return Number.isNaN(arg)
}
is.str = function(arg){
    return typeof arg === 'string';
}
is.bool = function(arg){
    return typeof arg === 'boolean';
}
is.undef = function(arg){
    return typeof arg === 'undefined';
}
is.def = function(arg){
   return !(is.undef(arg))
}
is.arr = function(arg){
    return Array.isArray(arg)
}
is.obj = function(arg){
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
}
is.fun = function(arg){
    return typeof arg === 'function';
}
is.truthy = function(arg){
   return Boolean(arg)
}
is.falsy = function(arg){
   return !is.truthy(arg)
}

var temp  = function arr(array,cnt){
    if (array== null)
 return [];
    if (cnt<0)
        return [];
    if (cnt == null)
        return array[0];
    return array.slice (0,cnt);
};
console.log(temp([1,2,3]));
console.log(temp([1,2,3],0));
console.log(temp([],3));
console.log(temp ([1,2,3],-2))
console.log(temp([1,2,3,4,5],2));


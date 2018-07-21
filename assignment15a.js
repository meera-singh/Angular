var arr = [];
var arr1=[2,4,6,8,10];
function addarray (arr1)
{
arr.push(arr1);
return(arr);
}
arr1.forEach(addarray);
console.log(arr);

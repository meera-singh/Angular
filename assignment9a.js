var arr =[1,5,6,10,3,2];
var temp =[];
function largestarray (arr){
 arr.forEach((item)=>
{
    if(temp.indexOf(item)===-1);
    temp.push(item);
})
 arr2=temp.sort((a,b)=> a-b);
return([arr2.length]-2);

}
console.log(largestarray(arr));



    
    





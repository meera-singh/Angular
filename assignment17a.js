// var arr= [NaN,0,15,"false",-22,"undefined",47,"NULL"];
// var temp=[];
// function arr1 (arr){
//    if(!isNaN(arr)&& arr!=0){
// temp.push(arr);
// return (temp);
// console.log(temp); 
//    }
//   }
var arr1= [];
function arr (item){
    item.forEach(
        (element) => 
        {
        if (!!element)
        {
            arr1.push(element);
        }
        })
        return arr1;
    }
console.log(arr([NaN,0,15,false,-22,undefined,47,null]));

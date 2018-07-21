//let cars = ["bmw","bentley","city"];
// cars.forEach(
//    // item => 
//   (item,index,array) => {
//         console.log(item,index,array);
//     }
// )
// cars.forEach(
// function(element){
//     console.log(element);
//     })

  //  ----------Array of objects-----------------------
//let fruits= ["banana","apple","orange","kiwi","litchi"]
//   let arrobj=[
//      { name:"abc"
//   },
//   {
//   name:'name'}
//   ];
//   //console.log(fruits[0]);
// console.log(arrobj[0]);
// console.log(fruits.indexOf("apple"));
// console.log(fruits.indexOf("kite"));
//console.log(fruits.length-1);
// fruits.unshift("kiwi");
//fruits.splice(2,0,"grapes");
//fruits.splice(3);
//console.log(fruits);
// fruits.splice(2,1,'papaya');
// console.log(fruits);

// fruits.forEach(
//     item =>
//     console.log(item)
// )

// console.log(fruits.join(" "));
// //let arr1= [1,2,3];
// let arr = fruits.reverse();
// console.log(fruits.concat(arr1));
//console.log(fruits.slice(2));
// console.log(fruits.splice(1,3));
// Console.log(arr);
//let fruits= ["banana","apple","orange","kiwi","litchi"]
//  let result= fruits.filter(
//      (item,index,array)=>
//      {
//          //console.log(item,index,array);
//          return item.length>5
//      }
//  )
//  console.log(result);

// let results = fruits.filter(item => item.length>5)
// console.log(results);

//let arrnum=[1,2,3,4,5,6,7,8,9,10];
//let result = arrnum.filter(item =>item %2 == 0)
// console.log(result);

// let result= arrnum.map(item=> item*2)
// console.log(result);

// let fruits= ["banana","apple","orange","kiwi","litchi"]
// let result = fruits.map(item=>'My ' + item)
// console.log(result); 
// let arrnum=[1,2,3,4,5,6,7,8,9,10];
// let result= arrnum.reduce(
//     (acc,current,index,arr)=>{
//         console.log(acc,current,index,arr)
//         return acc+current;
//     }
// )
// console.log(result);

// let result = arrnum.reduce((acc,current)=> acc+current
// )
// console.log(result);
// let oneliner = (acc,current)=> acc+current;
// let result = arrnum.reduce(oneliner,10);
// console.log(result);

// let arrnum=[1,2,3,4,5,6,7,8,9,10];
// let result= arrnum.every(ele => ele== 2)
// console.log(result);

var num =[1,4,10,3,25,7,2];
//let result = num.sort();
//console.log(result);

console.log(num.sort((a,b)=> a-b));





var car = {
name:'honda',
type:'sedan',
engine:'petrol',
year:'2015',
manufacturer: {
    name : 'honda',
    address:'manesar',
    pan:'fs345'

},
getName :function() {
    return this.name;
},
getType: function(){
return this.type;
},
getThis:function(){
    console.log(this);
}
}
// console.log(typeof car);
// console.log(typeof car.engine);
console.log(typeof car.manufacturer);
console.log(car.manufacturer.name);
// console.log(car.getName());
// console.log(car.getType());
console.log(car.getThis);

// var bike= {
//     name:'glamour',
//     type:'abc',
//     engine:'petrol',
//     year:'2016',
//     color:'black',




// }
//     console.log(typeof bike);
//     console.log(bike);
//     console.log(typeof bike.color);






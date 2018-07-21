var arr =[1,2,3,4];
var reducer = (acc,current)=> acc + current;
var reducer1 = (acc,current)=> acc * current;
var sumarr= arr.reduce(reducer);
var prodarr= arr.reduce(reducer1);
console.log(sumarr);
console.log(prodarr);
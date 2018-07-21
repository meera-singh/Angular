
function reverseint (int){
var temp = int.toString().split("").reverse().join("");
return parseInt(temp);

}
console.log(reverseint(256));
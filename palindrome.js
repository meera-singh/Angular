var str = "meera"
function palindrome (str){
if( str.split("").reverse().join ("")== str)
{
    console.log("true");
}
console.log("false");
}
palindrome(str);
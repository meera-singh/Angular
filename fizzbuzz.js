//------To print all elements from 1 to 100also print fizz for multiples of 3,buzz for multiples of 5 and fizzbuzz fro both---
function fizzbuzz ()
{
    for (i =1;i<=100;i++)
{
    if (i%3===0 && i%5==0){
    console.log("fizzbuzz");
}
else if(i%3==0)
{
    console.log("fizz");
}else if(i %5==0){
    console.log("buzz");
}else{
    console.log(i);
}
    }
}
console.log(fizzbuzz());
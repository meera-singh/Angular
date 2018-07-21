// var str1 =0;
// function capletter(str)
// {
//        str1=  str.charAt(0).toUppercase()
// }
// return str1;
// }
// console.log(capletter("my name is meera"));

var temp = "akshay singh rathore";
var t1= temp.split(" ");
var t2;
for(var i=0 ; i<=t1.length-1; i++)
{
     t2= t1[i].charAt(0).toUpperCase() + t1[i].substring(1);
     console.log(t2);
    
}

 
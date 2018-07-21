    var str ="javascript"
    var cnt =0;
    var t1=0;
    var count =1;
    var temp = str.split("");
  for (var i=0; i<temp.length; i++)
  {
      for (j=i;j<temp.length;j++)
      {
          if(temp[i]== temp[j]){
   cnt++;}
   if(cnt>count)
   {
       count =cnt;
       t1=temp[i];
   }
      }
      cnt =0;
    }

  console.log(t1 + " times: " + count);
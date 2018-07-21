//var a= [3,'a','a','a',2,3,'a',4,9,3,2];
var a=[3,4,3,6,5,3,3,3,4,5,6];
var count =0;
var cnt=1;
var item =0;
for (i=0;i<a.length;i++)
{
    for (j=i;j<a.length;j++)
    {
        if (a[i]==a[j])
        count++;
        if (cnt<count)
        {
cnt= count;
item=a[i];
    }
}
count=0;
}
console.log(item + " times " + cnt);
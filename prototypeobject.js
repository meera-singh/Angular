function car(name ,color){
    this.name = name;
    this.color = color;

    this.getName = function()
    {
        return this.name;
    }

}
var bettle = new car('Bettle','red');
//console.log(bettle);
var focus = new car('Focus','Black');
//console.log(focus);
//console.log(this);

bettle.enginetye = 'Petrol';
//console.log(bettle);
 for (var runner in bettle){
     console.log(runner);
     //console.log(bettle[runner]);
 }
  var bettle1= new car ('Bettle','red');
  if(bettle == bettle1){
      console.log("True")
  }
else {
    console.log("false");
}




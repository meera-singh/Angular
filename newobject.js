person = {
    firstname: "meera",
    lastname:"singh",
    age:"24",
    //getName (){
   // return this.firstname;
   // }
   get fullnam(){
       return `${this.firstname} ${this.lastname}`
   },
   set name (param)
   {
       this.firstname= param;
   }
};

//person.name = "amit";
//console.log(person.fullnam);
//console.log(person.firstname);
 //person['firstname']= 'amit';
// person.firstname;
 //console.log(person['firstname']);
console.log(Object.keys(person));


// var temp ="abc";
// for (var i =0; i<5; i++){
//     let a= 5;
//     //console.log(a);
// }
// console.log(a);

//FOR IN LOOP

// for (let key in person){
//     console.log(key);
//     console.log(person[key]);
// }
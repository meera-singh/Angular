var company ={

    name:"tata",
    start:"22/2/2017",
    end:"12/5/2018",
    emp:2500 
};
// console.log(company.start);
// console.log(Object.keys(company));
const testmap= company.map(function(comp){
return `${comp.name} {$comp.start}`;

});
console.log(testmap);
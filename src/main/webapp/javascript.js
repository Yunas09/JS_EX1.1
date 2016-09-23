/* global milliseconds, dateString, year, seconds, day, hours, minutes, month */

var student={
    studentName:"umo",
    studentAge: 21,
    studentID: 001

};
console.log(student);

var array=["umo", 21, student];
console.log(array);

function student2(Id, Name){
  this.Id = Id;
  this.Name = Name;
};
studo = new student2(1,"karsten");
studo.toString();
console.log(studo);



var array2=["tom", 003, "kristin", 004, "jan", 005];

window.addEventListener("load", declare());
    
function declare(){
    for (i = 0; i<3; i++){
    console.log("Name: " + array2[0] + " " + "ID: " + array2[1]);
    array2.shift();
    array2.shift();
    }
}



  var array3 = [
   {Name: "ana", Age: 22, Gender: true},
   {Name: "aka", Age: 18, Gender: false},
   {Name: "asa", Age: 19, Gender: false},
   {Name: "ala", Age: 32, Gender: true}
  ];
 
function getYoungestAge() {
    var b = array3[0];
    for (var i = 1; i < array3.length; i++) {
        if (b.Age > array3[i].Age) {
            b = array3[i];
        }
    }
    return b;
}

function getAllFemales(){
    var arrayGirl=[];
    for (var i = 0; i < array3.length; i++){
        if(array3[i].Gender=== true){
            
            arrayGirl.push(array3[i]);
   
        }
        
    }
    return arrayGirl;
}

console.log(getYoungestAge());
console.log(getAllFemales());


var array4 =[
    {Name: "imi", ID: 1},
    {Name: "ima", ID: 2},
    {Name: "imo", ID: 3},
    {Name: "imy", ID: 4}
];
var array41 =[
  {Name: "iqi", ID: 3}  
];

function moveStudent(){
    
    for(var i = 0; i<array4.length; i++){
        
        if(array4[i].ID !== array41[0].ID){
            array41.push(array4[i]);
            delete array4[i];
        }   
    }
return array41;
}
console.log(moveStudent());
console.log(array4);



var array5 =[
    {Name: "imi", Age: 88},
    {Name: "ima", Age: 32},
    {Name: "imo", Age: 51},
    {Name: "imy", Age: 10}
];

function max(){

   for (var i = 0; i<array5.length; i++){
         return "Age: " +  Math.max(array5[i].Age) + " Name: " +array5[i].Name;
            
    }  
}
console.log(max());


var array6=[
    
   {Name: "imi", Age: 88, type: "human"},
    {Name: "ima", Age: 32, type: "human"},
    {Name: "imo", Age: 51, type: "animal"},
    {Name: "imy", Age: 10, type: "animal"} 
    
];

function getAnimals(){
    
    for (var i =0; i<array6.length; i++){
       return array6[i].type === "animal";     
    }
 
}

function animals(){
    
      document.getElementById("demo").innerHTML = array6.filter(getAnimals());

    }
console.log(animals());
window.addEventListener("load", animals());
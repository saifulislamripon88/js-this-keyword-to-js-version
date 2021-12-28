//this.keyword
const person = {
    fName:"saiful",
    lName:"islam",
    roll:7018,
    year:2001,
    district:"lakshmipur",
    fullName:function(){
        return this.fName + " " + this.lName +" " + this.district +" "+ this.year; 
    }
}
// document.getElementById("demo1").innerHTML = person.roll;
document.getElementById("demo1").innerHTML = person.fullName();

//
const persons = {
    firstName:"saiful",
    lastName:"islam",
    fullNames:function(){
    return this.firstName + " "+this.lastName;
}
}
document.getElementById("demo2").innerHTML = persons.fullNames();

/// button remove
//call apply in object

const family1 = {
    fulnams:function(){
        return this.fisName+" "+ this.lasName;
    }
}
const family2 = {
    fisName:"Leonal",
    lasName:"Messi",
}
const family3 = family1.fulnams.call(family2);
document.getElementById("demo3").innerHTML = family3;

//uporer line theke simple vabe kora hoice 
// document.getElementById("demo3").innerHTML = family1.fulnams.call(family2);
//

// JavaScript Arrow Function

/**let a = 5;
let b = 10;
let c = a*b;
console.log(c)
 */

let myFunction = (c,d) => (c*d);
document.getElementById("demo5").innerHTML = myFunction(5,4);


let funcs = (c,d) =>(c/d);
document.getElementById("demo6").innerHTML = funcs(50,5);

//

let funct = (e,f) => (e+f);
document.getElementById("demo8").innerHTML = funct(20,40)

//
let funcst = (g,h) => (h-g);
document.getElementById("demo9").innerHTML = funcst(600,1900);


const hello = function(){
    return "hello world";
}
console.log(hello());

const hellos = () =>{
    return "hello Bangladesh";
}
console.log(hellos());

//
abul = () => "hello this is abul";
 console.log(abul());

 //

 abal =(val) => "hello " + val;
 console.log(abal("abal"))






 ///javascript class

 class car{
     constructor(name,year){
         this.name = name;
         this.year = year;

     }
 }
const myCar = new car("saiful",2001);
document.getElementById("demo10").innerHTML = myCar.name+" "+myCar.year;


//

class data{
    constructor(data1,data2,data3,data4){
        this.data1 = data1;
        this.data2 = data2;
        this.data3 = data3;
        this.data4= data4;
    }
}

let myData = new data("pepsi","mountain dew","mirinda orange","aquafina");
document.getElementById("demo11").innerHTML = myData.data1+", "+myData.data2+", "+myData.data3+", "+myData.data4;



///

class ghari{
    constructor(names,years){
        this.names=names;
        this.years=years;
    }
    ages(){
        let date = new Date();
        return date.getFullYear()-this.years;
    }
}
const myghari = new ghari("Lamborghini",2010);
document.getElementById("demo12").innerHTML = " my car is"+" " + myghari.ages() +" years old"


///
class tata{
    constructor(nam,yar){
        this.nam = nam;
        this.yar = yar;
    }
    agee(){
        let date = new Date;
        return date.getFullYear()-this.yar;
    }


}
const mytata = new tata("volvo",2005);
document.getElementById("demo13").innerHTML = "my tata ghari is"+" "+mytata.agee()+"years old";


///







let jsonText = '{"employees":[' +
'{"fstName":"saiful","lsName":"Ripon"},'+
'{"fstName":"Ahmad","lsName":"Ali"},'+
'{"fstName":"Mushiq","lsName":"Mahmudullah"}]}';

const obj = JSON.parse(jsonText);
document.getElementById("demo14").innerHTML = 
obj.employees[1].fstName+ " "+obj.employees[1].lsName +"<br>"+
obj.employees[0].lsName+" " +obj.employees[0].fstName+"<br>"+
obj.employees[2].fstName+" "+obj.employees[2].lsName;


///
let jonText = '{"employ":['+
'{"stName":"kamal","ndName":"hasan"},'+
'{"stName":"jamal","ndName":"uddin"},'+
'{"stName":"alam","ndName":"hossain"},'+
'{"stName":"kalam","ndName":"ullah"}]}';

const objs = JSON.parse(jonText);
document.getElementById("demo15").innerHTML = 
objs.employ[2].stName+" "+ objs.employ[2].ndName +"<br>"+
objs.employ[3].stName+" "+ objs.employ[3].ndName +"<br>"+
objs.employ[0].stName+" "+ objs.employ[0].ndName +"<br>"+
objs.employ[1].stName+" "+ objs.employ[1].ndName ;



//ES6 

const essix = (p,q) =>{ return p*q};
 document.getElementById("demo16").innerHTML = essix(5,5);





//ES6 js 2016

let x = 5;
let z = x ** 2;
console.log(z)

//

let xx = 5;
let zz = Math.pow(xx,3);
console.log(zz);

// let xx = 10;
// let zz = Math.pow(xx,2);
// console.log(zz);
//return 100


let c = 5;
let val = c**= 2;
console.log(val)

// let c = 5;
// c**= 3;
// console.log(c)
//return 125



// JavaScript Array.includes()

// const fruitsAll = ["apple","mango","orange","jackfruit","watermillo"];
// const allFruits  = fruitsAll.includes("apple");
// console.log(allFruits)
//return true


const fruitsAll = ["apple","mango","orange","jackfruit","watermillo"];
const allFruits  = fruitsAll.includes("strawberry");
console.log(allFruits)



/**const str = "6";
const strs = str.padStart(5,0);
console.log(strs);
return 00006
 */

/**const str = "8";
const strs = str.padEnd(8,7);
console.log(strs)
return 87777777
 */
const str = "8";
const strs = str.padStart(8,7);
console.log(strs)


//

async function myDisplay(){
    let myPromise = new Promise (function(resolve) {
        setTimeout(function() {resolve("Bangladesh is an Agricultural Country!!");},3000);
    })
    document.getElementById("demo17").innerHTML = await myPromise;
}
myDisplay();




/**async function myDisplay(){
    let myPromise = new Promise(function(resolve) {
        setTimeout(function() {resolve("This is md saiful islam ripon");},3000);
    })
document.getElementById("demo17").innerHTML = await myPromise;
}
myDisplay()
*/






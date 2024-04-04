// // // // // // // // // // // // // // // // // const accountId=1443334
// // // // // // // // // // // // // // // // // let accountEmail="bkbd@hasjhbh11"
// // // // // // // // // // // // // // // // // var accountPassword="12345"
// // // // // // // // // // // // // // // // // accountCity="Jaipur"
// // // // // // // // // // // // // // // // // let accountState;
// // // // // // // // // // // // // // // // // // accountId=2 // not allowed
// // // // // // // // // // // // // // // // // accountEmail="hc@gHjihoi"
// // // // // // // // // // // // // // // // // accountPassword="24532"
// // // // // // // // // // // // // // // // // accountCity="Kolkata"
// // // // // // // // // // // // // // // // // /*
// // // // // // // // // // // // // // // // // prefer not to use var, because of issue in block and functional scope
// // // // // // // // // // // // // // // // // */
// // // // // // // // // // // // // // // // // //console.log(accountId);
// // // // // // // // // // // // // // // // // console.table({accountId,accountEmail,accountPassword,accountCity,accountState})
// // // // // // // // // // // // // // // // // "use strict";//treat all js code as newer version
// // // // // // // // // // // // // // // // // //alert(3+3) //we are using nodejs not browser
// // // // // // // // // // // // // // // // // let name="jit ghosh"
// // // // // // // // // // // // // // // // // let age=18
// // // // // // // // // // // // // // // // // let isLoggedIn=true
// // // // // // // // // // // // // // // // // let state=null
// // // // // // // // // // // // // // // // //number
// // // // // // // // // // // // // // // // //bigint
// // // // // // // // // // // // // // // // //string
// // // // // // // // // // // // // // // // //boolean
// // // // // // // // // // // // // // // // //null-> standalone value
// // // // // // // // // // // // // // // // //undefined => no value assignment
// // // // // // // // // // // // // // // // //symbol-> unique 
// // // // // // // // // // // // // // // // //object
// // // // // // // // // // // // // // // // // console.log(typeof undefined)
// // // // // // // // // // // // // // // // // let score = "hitesh"
// // // // // // // // // // // // // // // // //  console.log(typeof (score));
// // // // // // // // // // // // // // // // // let valueInNumber = Number(score)
// // // // // // // // // // // // // // // // // console.log(typeof (valueInNumber));
// // // // // // // // // // // // // // // // // console.log(valueInNumber);
// // // // // // // // // // // // // // // // // //"33"=>33
// // // // // // // // // // // // // // // // // //"33abd" =>nan
// // // // // // // // // // // // // // // // // let isLoggedIn= "hi";
// // // // // // // // // // // // // // // // // let booleanIsLogged=Boolean(isLoggedIn);
// // // // // // // // // // // // // // // // // console.log(booleanIsLogged);
// // // // // // // // // // // // // // // // // //1 =>true ;
// // // // // // // // // // // // // // // // // //0=> true 0=> false 
// // // // // // // // // // // // // // // // // let someNumber=22;
// // // // // // // // // // // // // // // // // let stringsomenum=String(someNumber)
// // // // // // // // // // // // // // // // // console.log(stringsomenum);
// // // // // // // // // // // // // // // // let str1="hello"
// // // // // // // // // // // // // // // // let str2=" jit"
// // // // // // // // // // // // // // // // console.log(str1+str2)
// // // // // // // // // // // // // // // // console.log(1+"2"+1);
// // // // // // // // // // // // // // // console.log(true+);
// // // // // // // // // // // // // // // console.log(+"");
// // // // // // // // // // // // // // let g=100
// // // // // // // // // // // // // // g++
// // // // // // // // // // // // // // console.log(g);
// // // // // // // // // // // // // console.log(null>0);
// // // // // // // // // // // // // console.log(null===0);
// // // // // // // // // // // // // console.log(null>=0 );
// // // // // // // // // // // // console.log("2"==2);
// // // // // // // // // // // // console.log("2"===2);

// // // // // // // // // // // let myobj={
// // // // // // // // // // //     name:"Jit",
// // // // // // // // // // //     age:19,
// // // // // // // // // // // }
// // // // // // // // // // // console.log(myobj);
// // // // // // // // // // const Newfunction=function(){
// // // // // // // // // //     console.log("hello bhai!!");
// // // // // // // // // // }
// // // // // // // // // // let a=Newfunction();
// // // // // // // // // // console.log(typeof Newfunction);
// // // // // // // // // // const name="Jit"
// // // // // // // // // // const repocount=2
// // // // // // // // // // //console.log(name+repocount+" value");
// // // // // // // // // // console.log(`Helloo my name is ${name} and my repocount is ${repocount}`);
// // // // // // // // // const gameName= new String("Jit-gh");
// // // // // // // // // // console.log(gameName[0]);
// // // // // // // // // // console.log(gameName.__proto__);
// // // // // // // // // // console.log(gameName.length);
// // // // // // // // // // console.log(gameName.toUpperCase());
// // // // // // // // // // console.log(gameName.charAt(1));
// // // // // // // // // // console.log(gameName.indexOf('t'));
// // // // // // // // // const newstring = gameName.substring(-2,4)
// // // // // // // // // console.log(newstring);
// // // // // // // // // const anotherstring = gameName.slice(-6,4)
// // // // // // // // // console.log(anotherstring)

// // // // // // // // // //trim or replace
// // // // // // // // // const astr="    Jit       "
// // // // // // // // // console.log(astr)
// // // // // // // // // console.log(astr.trim());
// // // // // // // // // const url="https://jit.com/jit%20ghosh"
// // // // // // // // // console.log(url.replace('%20','-'))
// // // // // // // // // console.log((url.includes('jit')))
// // // // // // // // // console.log(gameName.split('-'))
// // // // // // // //  const score = 400
// // // // // // // //  //console.log(score);
// // // // // // // // const balance = new Number(100)
// // // // // // // // //console.log(balance.toString().length);
// // // // // // // // //console.log(balance.toFixed(2));
// // // // // // // // const othernumber= 1123.89896
// // // // // // // // //console.log(othernumber.toPrecision(4))
// // // // // // // // const Hundreds= 100000
// // // // // // // // //console.log(Hundreds.toLocaleString('en-IN'));


// // // // // // // // ////++++++++++++MATHS+++++++++++++/////
// // // // // // // // //console.log(Math)
// // // // // // // // // console.log(Math.abs(-4));
// // // // // // // // // console.log(Math.round(4.33));
// // // // // // // // // console.log(Math.ceil(4.2));
// // // // // // // // // console.log(Math.floor(4.2));
// // // // // // // // // console.log(Math.ceil(4.2));
// // // // // // // // // console.log(Math.min(1,2,3,4,5));
// // // // // // // // console.log(Math.random());
// // // // // // // // console.log((Math.random()*10)+1);

// // // // // // // // const min=10;
// // // // // // // // const max=20;

// // // // // // // // console.log(Math.floor(Math.random() *( max-min+1))+min);
// // // // // // // ///    DATE ///
// // // // // // // let mydate = new Date()
// // // // // // // console.log(mydate.toDateString());
// // // // // // // console.log(mydate.toLocaleString());
// // // // // // // console.log(typeof mydate);
// // // // // // // //let mycreatedate = new Date(2024,1,2);
// // // // // // // let mycreatedate = new Date("02-12-2024");
// // // // // // // //console.log(mycreatedate.toLocaleString());
// // // // // // // let timestamp = Date.now()
// // // // // // // // console.log(timestamp);
// // // // // // // // console.log(mycreatedate.getTime());
// // // // // // // //console.log(Math.floor(Date.now()/1000));
// // // // // // // let newDate = new Date();
// // // // // // // console.log(newDate);
// // // // // // // console.log(newDate.getDay())
// // // // // // // console.log(newDate.getMonth()+1);
// // // // // // // newDate.toLocaleDateString('default',{
// // // // // // //    weekday:"long",
// // // // // // //    month:"long"
// // // // // // // })
// // // // // // //--------------    ARRAY    -----------------//
// // // // // // // const arr = [0,1,2,3,4,5]
// // // // // // // const hero = ["ironman","thor"]
// // // // // // // const arr2= new Array(1,2,3,4)
// // // // // // // //console.log(arr.length);
// // // // // // // // arr.push(6)
// // // // // // // // arr.push(7)
// // // // // // // // arr.pop()
// // // // // // // //arr.unshift(0)
// // // // // // // //arr.shift()
// // // // // // // // console.log(arr.includes(9));
// // // // // // // // console.log(arr.indexOf(4));
// // // // // // // // const newarr=arr.join()
// // // // // // // // console.log(arr);
// // // // // // // // console.log(newarr);
// // // // // // // //slice splice
// // // // // // // console.log("A",arr);
// // // // // // // const s=arr.slice(1,3)
// // // // // // // console.log(s);
// // // // // // const mhero = ["ironman","thor","spiderman"]
// // // // // // const dchero = ["superman","flash","batman"]
// // // // // // //mhero.push(dchero);
// // // // // // // console.log(mhero);
// // // // // // // let marvel=mhero.concat(dchero);
// // // // // // // console.log(marvel);cons
// // // // // // const all_hero=[...mhero,...dchero];
// // // // // // //console.log(all_hero);
// // // // // // const anar=[1,2,3,4,5,[6,7,8],12,[33,43[98,121]]]
// // // // // // const usablear=anar.flat(Infinity)
// // // // // // //console.log(usablear);
// // // // // // console.log(Array.isArray("Jit"));
// // // // // // console.log((Array.from("Jit")));
// // // // // // //console.log((Array.from{name:"JIT"}));//INTERESTING

// // // // // // let s1=100;
// // // // // // let s2=234
// // // // // // let s3=221
// // // // // // console.log(Array.of(s1,s2,s3));



// // // // // //singleton
// // // // // //object.create
// // // // // //  object literals

// // // // // const mysym=Symbol("key1")

// // // // // const JsUser={
// // // // //     name:"JIT",
// // // // //     "Full Name":"Jit Ghosh",
// // // // //     [mysym]:"mykey1",
// // // // //     age:18,
// // // // //     location: "Jaipur",
// // // // //     email:"gjit515@gmail.com",
// // // // //     islogin: false,
// // // // //     lastloginday: ["Monday","Wednesday"]
// // // // // }
// // // // // // console.log(JsUser.email)
// // // // // // console.log(JsUser["email"]);
// // // // // // console.log(JsUser["Full Name"]);
// // // // // // console.log(JsUser[mysym]);

// // // // // // JsUser.email="jit@2094outlook.com"
// // // // // // console.log(JsUser["email"]);
// // // // // // Object.freeze(JsUser)
// // // // // //console.log(JsUser["email"]);
// // // // // console.log(JsUser);
// // // // // JsUser.greeting=function(){
// // // // //     console.log("Hello Js User");
// // // // // }
// // // // // JsUser.greetingtwo=function(){
// // // // //     console.log(`Hello Js User,${this.name}`);

// // // // // }
// // // // // console.log(JsUser.greeting);
// // // // // console.log(JsUser.greeting());
// // // // // console.log(JsUser.greetingtwo);
// // // // // console.log(JsUser.greetingtwo());

// // // // //const tinderUser = new Object()
// // // // const tinderUser={}
// // // // tinderUser.id="123abc"
// // // // tinderUser.name="Jiggy"
// // // // tinderUser.isLoggedin=false
// // // // //console.log(tinderUser);

// // // // const regularuser={
// // // //     email: "jitgh@gmail.com",
// // // //     fullname:{
// // // //         userfullname:{
// // // //             firstname: "Jit",
// // // //             lastname: "ghosh"
// // // //         }
// // // //     }

// // // // }
// // // // //console.log(regularuser.fullname.userfullname.firstname);
// // // // const obj1={1: "a", 2: "b"}
// // // // const obj2={3: "a", 4: "b"}
// // // // const obj4={5: "a", 6: "b"}
// // // // //const obj3={obj1,obj2};
// // // // //console.log(obj3);
// // // // //const obj3=Object.assign({},obj1,obj2,obj4);//empty parenthesis used for that
// // // // const obj3={...obj1,...obj2}//Most use 
// // // // //console.log(obj3);

// // // // //database value deal

// // // // // const users={
// // // // //     {
// // // // //         id: 1,
// // // // //         email: "hyyg@gmail.com"
// // // // //     } ,
// // // // //     {
// // // // //         id: 1,
// // // // //         email: "hyyg@gmail.com"
// // // // //     },
// // // // //     {
// // // // //         id: 1,
// // // // //         email: "hyyg@gmail.com"
// // // // //     },
// // // // // }

// // // // //users[1].email
// // // // // console.log(tinderUser)

// // // // // console.log(Object.keys(tinderUser));
// // // // // console.log(Object.values(tinderUser));
// // // // // console.log(Object.entries(tinderUser));
// // // // // console.log(tinderUser.hasOwnProperty('id'));

// // // // const course ={
// // // //     coursename: "js bhai",
// // // //     price: "99",
// // // //     courseinstructor: "jim"
// // // // }

// // // // const {courseinstructor: instructor} =course

// // // // console.log(instructor);


// // // // // const navbar = ({company}) =>{

// // // // // }

// // // // // navbar(company = "Jit")

// // // // // {
// // // // //    " name": "Jit",
// // // // //     "coursename": "Js bhai",
// // // // //     "price": "free"
// // // // // }

// // // // [
// // // //     {},
// // // //     {},
// // // //     {}
// // // // ]

// // // //  FUNCTIOS////

// // // function sayName(){
// // //     console.log("J");
// // //     console.log("i");
// // //     console.log("t");
// // // }

// // // //sayName()

// // // // function addTwoNumber(number1,number2){
// // // //     console.log(number1+number2);
// // // // }
 
// // // function addTwoNumber(number1,number2){
// // //    // console.log(number1+number2);
// // //  //  let result=(number1+number2)
// // //    //return result;
// // //    return number1+number2
// // // }
 
// // //  const result= addTwoNumber(5,3);
// // //  //console.log(result);

// // // function loginusermessage(username= "sam"){
// // //     if(!username){
// // //         console.log("please enter a user name");
// // //         return;
// // //     }
// // //     return `${username} just login`
// // // }

// // //  //console.log(loginusermessage())

// // // function calculateCartprice(val1,val2,...num1){
// // //  return num1
// // // }
// // // // console.log(calculateCartprice(200,400,500,465,1200));

// // // const user={
// // //     username:"jit",
// // //     price: 299
// // // }

// // // function handleobject(anyobject){
// // //     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// // // }

// // // // handleobject(user)
// // // handleobject({
// // //     username:"sam",
// // //     price :399
// // // })

// // // const newarray=[200,300,400,500]
// // // function secondValueArray(onearray){
// // //     return onearray[1]
// // // }

// // // console.log(secondValueArray(newarray));

// // ///SCOPE////

// // // var c=200
// // // if(true){
// // //     var c=24
// // // }
// // // console.log(c);

// // // function one(){
// // //     const username ="Jit"

// // //     function two(){
// // //         const website = "youtube"
// // //         console.log(username);
// // //     }
// // //    // console.log(website);
// // //     two()
// // // }
// // // one()


// // ////////***************************INTERESTING    */
// // //console.log(addOne(5))
// // function addOne(num){
// //     return num+1
// // }


// // //addTwo(5)
// // const addTwo= function(num){
// //     return num+2
// // }


// // ///  ARROW FUNCTION /////


// // const user={
// //     username: "Jit",
// //     price:877,

// //     welcomemessage: function(){
// //         console.log(`${this.username},welcome to website`);
// //         console.log(this);
// //     }
// // }


// //  //user.welcomemessage()

// // // user.username="sam"
// // // user.welcomemessage()

// // //console.log(this);

// // function chai(){
// //     let username="Jit"
// //     console.log(this.username);
// // }
// // chai()


// // const chai=() =>{
// //     let username="Jit"
// //    console.log(this.username);
// // }
// // chai()

// ////   IMPLICIT /////
// // const addTwo = (num1,num2) =>{
// //     return num1+num2
// // }
// /////EXPLICIT/////////
// // const addTwo = (num1,num2) => (num1+num2)
// // console.log(addTwo(3,4));

// // const addTwo = (num1,num2) => ({username: "Jit"})

// // console.log(addTwo(3,4));

// //const arr=[2,3,4,5]
// //arr.forEach(()=>{})


// // Immediately Invoked Function Expressions (IIFE)

// // (function chai(){
//     //NAMED IIFE
// //     console.log(`DB CONNECTED`);
// // })()

// //global scope ka pollution se problem hota he ,global scope variable se bachne ke liye

// // ((bhain) =>{
// //     console.log(`db connected bhai ${bhain}`)
// // })(`Jit`);
// // (function chai(){
// //     //NAMED IIFE
// //     console.log(`DB CONNECTED`);
// // //   })()

// // function one(){
// //     console.log("One");

// // }
// // function two(){
// //     console.log("Two");
// // }

// // function three(){
// //     console.log("three");
// // }

// // one()
// // two()
// // three()


// //if
// // const isuserLoggedin = true
// // if(2==="2"){
// //     console.log("YES");
// // }

// // const userloggedIn = true
// // const debitCard = true

// // // if(userloggedIn && debitCard){
// // //     console.log("Allow to buy");
// // // }

// // if(userloggedIn || debitCard){
// //     console.log("allow");
// // }

// // const month = 3
// //  switch (month) {
// //     case 1:
// //         console.log("january");
        
// //         break;
// //     case 2:
// //         console.log("february");
        
// //         break;
// //     case 3:
// //         console.log("march");
        
// //         break;
 
// //     default:
// //         console.log("default");
// //         break;
// //  }

// // const userEmail = []

// // if(userEmail){
// //     console.log("got user email");
// // }
// // else{
// //     console.log("don");
// // }

// //truthy and falsy values
// //falsy values
// // false, 0 , -0 ,BigInt 0n ,"", null , undefined, NaN

// //truthy values 
// // "0", 'false' , " ", [] ,{}, function(){}


// // const emptyobj = {}
// // if(Object.keys(emptyobj).length===0){
// //     console.log("object ok");
// // }

// //Nullish Coalescing Opearator(??): null undefined
// // let val1;
// // //val1=5??10
// // // val1 = null?? 10
// // // val1 = undefined ??null
// // console.log(val1);

// //Ternary Opearator

// // for(let index=0;index<10;index++){
// //     const element=index;
// //     console.log(element);
// // }

// // const coding=["js","ruby","java","python","cpp"]
// // //for each never return values
// // const values = coding.forEach((item) => {
// //     console.log(item);
// //     return item;
// // })


// //const mynums=[1,2,3,4,5,6,7,8,9,10]

// //  const newnum=mynums.filter((num) => num>4)
// //     // if(num>4)
// //     // console.log(num);

// // console.log(newnum);

// // const newnums=[]
// // mynums.forEach((num) =>{
// //     if(num>4){
// //         newnums.push(num);
// //     }
// // })

// // console.log(newnums);

// const myNumber = [1,2,3,4,5,6,7,8,9,10]
// // const newnums=myNumber.map( (num) => num+10)


// const newnums=myNumber
//                         .map((num) => num*10)
//                         .map((num) => num+1)
//                         .filter((num) => num>=40)

// console.log(newnums);

// const mynums= [1,2,3]

// // const total = mynums.reduce(function(acc,curr) {
// //     console.log(`Accumulator value: ${acc} and currval: ${curr}`);
// //     return acc+curr
// // },0)


// // console.log(total);

// const total = mynums.reduce((acc,curr) => curr+acc,0)

// console.log(total)

// const shoppingcart = [
//     {
//         itemname: "js course",
//         pricr:2999
//     },
//     {
//         itemname: "python course",
//         pricr:999
//     },
//     {
//         itemname: "devops course",
//         pricr:1999
//     },
//     {
//         itemname: "datascience course",
//         pricr:11999
//     }
// ]

// const pricetopay = shoppingcart.reduce((acc,item)=>acc+item.pricr,0)

// console.log(pricetopay);


// //  DOM => Document Object Model ////


console.log("hi jit");


































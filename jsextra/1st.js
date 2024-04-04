// // // // // // // // // // // // //arithmatic op
// // // // // // // // // // // // // let a=2;
// // // // // // // // // // // // // let b=7;
// // // // // // // // // // // // // console.log("a+b = ",a+b);
// // // // // // // // // // // // // console.log("a-b = ",a-b);
// // // // // // // // // // // // // console.log("a*b = ",a*b);
// // // // // // // // // // // // // console.log("a/b = ",a/b);
// // // // // // // // // // // // // console.log("a%b = ",a%b);
// // // // // // // // // // // // // console.log("a**b = ",a**b);
// // // // // // // // // // // // // //unary op
// // // // // // // // // // // // // console.log("a= ",a++);
// // // // // // // // // // // // // console.log(a);
// // // // // // // // // // // // // console.log("a= ",a--);
// // // // // // // // // // // // // console.log("a= ",--a);
// // // // // // // // // // // // // console.log("a= ",++a);
// // // // // // // // // // // // // a+=4;
// // // // // // // // // // // // // b+=3;
// // // // // // // // // // // // // console.log("a =",a,"b= ",b);
// // // // // // // // // // // // // let a=6;
// // // // // // // // // // // // // let b=4;
// // // // // // // // // // // // // if(a<=b||a+b<10)
// // // // // // // // // // // // // console.log("true");
// // // // // // // // // // // // // else
// // // // // // // // // // // // // console.log("false");
// // // // // // // // // // // // // let age=13;
// // // // // // // // // // // // // (age>18)?console.log("adult"):console.log("noob");
// // // // // // // // // // // // //console.log(result);
// // // // // // // // // // // // // let a=prompt("student grade");
// // // // // // // // // // // // // if(a>=90&&a<=100){
// // // // // // // // // // // // //     console.log("grade = A");
// // // // // // // // // // // // // }
// // // // // // // // // // // // // else if(a>=70&&a<=89){
// // // // // // // // // // // // //     console.log("grade = B");
// // // // // // // // // // // // // }
// // // // // // // // // // // // // else if(a>=60 && a<=69){
// // // // // // // // // // // // //     console.log("grade = C");
// // // // // // // // // // // // // }
// // // // // // // // // // // // // else if(a>=50 && a<=59){
// // // // // // // // // // // // //     console.log("grade = D");
// // // // // // // // // // // // // }
// // // // // // // // // // // // // else{
// // // // // // // // // // // // //     console.log("grade = F");
// // // // // // // // // // // // // }
// // // // // // // // // // // // // let str="Jit Ghosh";
// // // // // // // // // // // // // let newstr=str.toUpperCase();
// // // // // // // // // // // // // let rt=str.trim();
// // // // // // // // // // // // // let str1="mckv";
// // // // // // // // // // // // // console.log(str);
// // // // // // // // // // // // // console.log(newstr);
// // // // // // // // // // // // // console.log(rt);
// // // // // // // // // // // // // console.log(str.slice(3));
// // // // // // // // // // // // // //console.log(str.concat(str1));
// // // // // // // // // // // // // console.log(str+str1);
// // // // // // // // // // // // // let str="hello";
// // // // // // // // // // // // // console.log(str.replace("el","123"));
// // // // // // // // // // // // // console.log(str.charAt(2));
// // // // // // // // // // // // // let name=prompt("enter your name");
// // // // // // // // // // // // // console.log("@"+name+name.length);
// // // // // // // // // // // //  let arr=[97,96,87,92,56];
// // // // // // // // // // // // // console.log(arr.length);
// // // // // // // // // // // // // for(let item of arr){
// // // // // // // // // // // // //     console.log(arr);
// // // // // // // // // // // // // }
// // // // // // // // // // // // let price=[250,645,300,900,50];
// // // // // // // // // // // // //let idx=0;
// // // // // // // // // // // // // for(let val of price){
// // // // // // // // // // // // //     console.log(val);
// // // // // // // // // // // // //     idx++;
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // for(let i=0;i<price.length;i++){
// // // // // // // // // // // // //     let offer=price[i]/10;
// // // // // // // // // // // // //     price[i]-=offer;
// // // // // // // // // // // // // }
// // // // // // // // // // // // // console.log(price);
// // // // // // // // // // // // // price.push(200,230,340);
// // // // // // // // // // // // // console.log(price);
// // // // // // // // // // // // // price.pop();
// // // // // // // // // // // // // price.pop();
// // // // // // // // // // // // // console.log(price);
// // // // // // // // // // // // // console.log(price.toString());
// // // // // // // // // // // // // let p=arr.concat(price);
// // // // // // // // // // // // // console.log(p);
// // // // // // // // // // // // price.unshift(56);
// // // // // // // // // // // // console.log(price);
// // // // // // // // // // // // price.shift();
// // // // // // // // // // // // console.log(price);
// // // // // // // // // // // // console.log(arr.slice());

// // // // // // // // // // // let companies=["BloomBerg","Microsoft","Uber","Google","IBM","Netflix"];
// // // // // // // // // // // console.log(companies);

// // // // // // // // // // // //console.log(companies.shift());
// // // // // // // // // // // console.log(companies.splice(2,1,"Ola"));
// // // // // // // // // // // console.log(companies);
// // // // // // // // // // // console.log(companies.push("Amazon"));
// // // // // // // // // // // console.log(companies);
// // // // // // // // // // function welcome(){
// // // // // // // // // //     console.log("HELLO");
// // // // // // // // // //     console.log("Today is Thursday");
// // // // // // // // // // }

// // // // // // // // // // welcome();
// // // // // // // // // function myfunc(msg1,msg2){
// // // // // // // // // sum=(msg1+msg2);
// // // // // // // // // return sum;

// // // // // // // // // }

// // // // // // // // // let val=myfunc(23,444);
// // // // // // // // // console.log(val);
// // // // // // // // const sum =(a,b)=>{
// // // // // // // // //console.log(a*b);
// // // // // // // // return a*b;
// // // // // // // // }

// // // // // // // // console.log(sum(3,5));
// // // // // // // function vowel(Str){
// // // // // // //     let c=0;
// // // // // // //     for(let i=0;i<Str.length;i++){
// // // // // // //         if(Str[i]=='a'||Str[i]=='e'||Str[i]=='i'||Str[i]=='o'||Str[i]=='u'){
// // // // // // //             c++;
// // // // // // //         }
// // // // // // //     }
// // // // // // //     return c;
// // // // // // // }
// // // // // // // let a=prompt("enter the string");
// // // // // // // console.log(a);
// // // // // // // console.log(vowel(a));
// // // // // // let arr=[1,2,3,4,5];
// // // // // // arr.forEach(function (val){
// // // // // //     console.log(val*val);
// // // // // // });

// // // // // let h2=document.querySelector("h2");
// // // // // console.dir(h2);
// // // // // console.dir(h2.innerText);
// // // // // h2.innerText=h2.innerText+" Be Focus with that";
// // // // // console.dir(h2.innerText);
// // // // let divs=document.querySelectorAll(".box");
// // // // //console.dir(divs);
// // // // let idx=1;
// // // // for(div of divs){
// // // //     div.innerText=`new unique value ${idx}`;
// // // //     idx++;
// // // //     //console.log(div);
// // // // }
// // // // // divs[0].innerText=" new value 1 ";
// // // // // divs[1].innerText=" new value 2 ";
// // // // // divs[2].innerText=" new value 3 ";
// // // // // //divs[0].innerText=" new value 1 ";
// // // let h2=document.querySelector("h2");
// // // console.dir(h2.innerText);
// // // h2.innerText=h2.innerText+"just study";
// // let a=document.querySelector("div");
// // console.log(a);
// // let id=a.getAttribute("id");
// // console.log(id);
// let div=document.querySelector("div");
// div.style.backgroundColor="purple"
// //div.style.visibility="hidden"
// div.style.fontSize="22px"
let but=document.createElement("button")
console.log(but)
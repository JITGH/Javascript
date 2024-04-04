const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

console.log(descriptor);

const chai={
    name:"masala chai",
    price:50,
    isAvailabe: true,


    orderchai:function(){
        console.log("chai nahi bani");
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"price"));

Object.defineProperty(chai,'price',{
   //writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"price"));

for(let[key,value] of Object.entries(chai)){
    if(typeof value!=='function'){
        console.log(`${key}:${value}`);
    }
    
}



// fetch('https://something.com').then().catch().finally()

const promiseOne=new Promise(function(resolve,reject){
    // do an async task
    //db calls
    //crypto task,
    //network call 
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
}) 

promiseOne.then(function(){
    console.log("promise consumed");
})


new  Promise(function(resolve,reject){
setTimeout(function () {
    console.log("Async task 2");
    resolve()
},1000)

}).then(function(){
    console.log("ASYNC 2 resolve");
})


const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
           resolve({username:"Jit",email:"gjit515@gmail.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
})

const promisefour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"jit",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

const username=promisefour.then((user) => {
console.log(user);
return user.username;
}).then((username)=>{
console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is eithr resolved or reject"))
//console.log(username);

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumepromisefive(){
   try{
    const response=await promisefive
    console.log(response);
   }catch(error){
    console.log(error);
   }
}

consumepromisefive()

// async function getalluser(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

//getalluser()

fetch('https://api.github.com/users/JITGH')
.then((response) =>{
    return response.json();
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log("error");
})
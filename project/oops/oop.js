//js and classes


//oop
//---> collection of properties and methods
//---> toLowerCase

// why use oop
//part of oop

//object literal

// constructor function
//prototype
// classes
// instances(new,this)


// 4 pillars
//Abstraction
//Encapsulation
//Inheritance
//Polymorphism


const user={
    username:"jit",
    logincount:8,
    signedin:true,

    gotuserdetails:function(){
        //console.log("got user details from database");
        //console.log(`username:${this.username}`);
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.gotuserdetails());
//console.log(this);

//constructor function.

// const promise1=new promise()
// const date=new Date()

function User(username,logincount,signedin){
this.username=username
this.logincount=logincount
this.signedin=signedin

//return this;
this.greeting=function () {
    console.log(`welcome ${this.username}`);
}

//by default this is attached.
}

const userone=new User("jit",12,true)
const Usertwo=new User("cc",11,8)
console.log(userone.constructor);

console.log(Usertwo.constructor);

//instance of read 
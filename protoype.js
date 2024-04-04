// let myName="Jit    "

// console.log(myName.truelength());

let myhero=["Thor","Batman"]

let heropower={
    thor:"hammer",
    Batman:"sigma",

    getBatpower:function(){
        console.log(`Batman power is ${this.Batman}`);
    }
}

Object.prototype.Jit=function(){
    console.log(`Jit is present in all object`);
}

Array.prototype.Jithi=function(){
    console.log(`Jit says hello`);
}

myhero.Jithi()
//heropower.Jithi()


//inheritance
const user={
    name:"Jit",
    email: "jitchai@gmail.com"
}
const Teacher={
    makeVideo: true
}

const TeachingSupport={
    isAvailable:false
}

const TaSupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user



//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let annotherusername="Jit        "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);

    console.log(`True length is: ${this.trim().length}`);
}

console.log(annotherusername.truelength());

"icedtea".truelength()





class User{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class teach extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const chai=new teach("chai","chai@bhai.com",1234)
chai.addCourse()
chai.logme()

const masalchai=new User("masalachai")
// masalchai.addCourse()
masalchai.logme()

console.log(chai instanceof teach)
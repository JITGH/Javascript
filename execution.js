function setusername(username){
    this.username=username
    console.log("called");
}

function createUser(username,email,password){
    setusername.call(this,username)//no call

    this.email=email

    this.pasword=password
}

const chaioo=new createUser("chai","chai@insta.com",1234)

console.log(chaioo);
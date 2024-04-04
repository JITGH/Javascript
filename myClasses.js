// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chaibhai=new User("bhai","chai@bhai.com","1234")

// console.log(chaibhai.encryptPassword());
// console.log(chaibhai.changeusername());

//behind the scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}


const teabhai=new User("tea","tea@bhai.com","1234")

console.log(teabhai.encryptPassword());
console.log(teabhai.changeusername());




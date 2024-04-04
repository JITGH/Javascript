{{
    function multipleby5(num){
    return num*5;
}

multipleby5.power=2

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);



function createuser(username,score){
    this.username=username;
    this.score=score;
}

createuser.prototype.increment=function () {
this.score++
}
//jis ne bhi score pucha uska biolo bhai , thats why we use this keyword.
createuser.prototype.printme=function(){
    console.log(`score is ${this.score}`);
}

const chai=new createuser("chai",21)
const tea=new createuser("tea",50)

chai.printme()




}}
function ok(email,password){
    this._emailemail=email;
    this._password=password


Object.defineProperty(this,'email',{
    get:function(){
        return this._email
    },
    set:function(value){
        this._email=value
    }
})



Object.defineProperty(this,'password',{
    get:function(){
        return this._password
    },
    set:function(value){
        this._password=value
    }
})





}



const bhai=new ok("JIT@KKR.com","kkr")
console.log(bhai.password)
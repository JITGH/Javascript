class User{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}


const jit=new User("jit")
//console.log(jit.createId())
jit.logme()

class teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new teacher("iphone","iphone@tt.com")
iphone.logme();


const user={
   _email:'jg@gh.com',
   _password:"3455",

    get email(){
        return this._email
    },

    set email(value){
        this._email=value
    }



}


//console.log(user._password);

const tea=Object.create(user)
console.log(tea.email);
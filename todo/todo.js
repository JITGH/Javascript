let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formValidation();
})

let formValidation=()=>{
    if(textInput.value===""){
        console.log("failure");
       // alert('task title cannot be blank')
        msg.innerHTML="Fill the Task Title"
    }else{
        console.log("succes");
        msg.innerhtml=""
        acceptance()
        add.setAttribute("data-bs-dismiss","modal")
        add.click()

        (()=>{
            add.setAttribute("data-bs-dismiss","")
        })()
    }
}

let data=[]
let acceptance=()=>{
    data.push({
        text:textInput.value,
        date:dateInput.value,
        description:textarea.value,
    })

    localStorage.setItem("data",JSON.stringify(data))

    console.log(data);
    createtask()
}

let createtask=()=>{
    tasks.innerHTML=""
    data.map((x,y)=>{
        return (tasks.innerHTML += `
    <div id=${y}>
          <span class="fw-bold">${x.text}</span>
          <span class="small text-secondary">${x.date}</span>
          <p>${x.description}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `);
    })
    resetform();
}

let resetform = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
  };
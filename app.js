const inputVal = document.querySelector(".inputVal")
const btn = document.querySelector(".btn")
const todoListItem = document.querySelector(".todoListItem")
const clearTask= document.querySelector(".clearTask")


let todos = JSON.parse(localStorage.getItem("TODOS")) || [];
console.log(todos)


const renderSavedTodos = () => {
    todos.forEach((taskList) => {
      createElement(taskList);
    });
  };
  renderSavedTodos()

btn.addEventListener("click",()=>{
    if(inputVal.value.trim()===""){
        Swal.fire('MERVECİĞİM LÜTFEN Bİ YAPILACAK EKLE (YOKSA NASIL   AŞAĞIYA YAZALIM YAW...❤️')
        
    }
    else{
        const taskList = {
            id : new Date().getTime(),
            text:inputVal.value
        }
        todos.push(taskList)
        localStorage.setItem("TODOS",JSON.stringify(todos))
        inputVal.value =""
        createElement(taskList)
        Swal.fire('EKLEDİK MERVECİĞİM❤️')

    }
    
})

function createElement(taskList){
    const {id,text}=taskList
    const task= document.createElement("div")
    task.id = id
    const taskText= document.createElement("p")
    const deleteTask= document.createElement("span")
    todoListItem.appendChild(task)
    task.appendChild(taskText)
    task.appendChild(deleteTask)
    task.classList.add("todoList")
    taskText.classList.add("pText")
    deleteTask.classList.add("deleteTask")
    taskText.textContent =text.toUpperCase()
}

todoListItem.addEventListener("click",(e)=>{
    Swal.fire('SİLDİK MERVECİĞİM❤️')
    const id = e.target.parentElement.getAttribute("id")
    console.log(e.target.classList)
    if(e.target.classList == "deleteTask"){
        e.target.parentElement.remove()
        todos=todos.filter((item=>item.id != id))
        localStorage.setItem("TODOS", JSON.stringify(todos))
        
    }
    
})
clearTask.addEventListener("click",()=>{
   
    if(confirm("Can We Remove All Todos?")==true){
        [...(todoListItem.children)].forEach(item=>item.remove())
        todos =[]
        localStorage.setItem("TODOS", JSON.stringify(todos))
        Swal.fire('Hepsini Sildik Efendim❤️')
    }
    else{
        Swal.fire('BİZ MERVENİN DELİSİYİZ❤️')
    }
})
inputVal.addEventListener("keydown",(e)=>{
    if(e.code==="Enter"){
        btn.click()
    }
})
window.onload = function () {
    inputVal.focus();
  };




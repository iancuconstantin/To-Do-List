let allTasks = document.getElementById("list");

const addItem = ()=>{
    let newTask = document.getElementById("new");
    


    if(newTask.value !== ""){
        allTasks.innerHTML+= `<div>
                                <span>${newTask.value}</span>
                                <button class="toggleStatus">done</button>
                            </div>`
        newTask.value = "";
    
        const allBtn= document.getElementsByClassName("toggleStatus")

            for(let i=0;i<allBtn.length;i++){
            allBtn[i].addEventListener("click", getDone)
        }
    }
}

const getDone = (event)=>{
    console.log(event);
    if(event.target.parentElement.className ==="done"){
        event.target.parentElement.className = "";
        event.target.innerHTML = "done"
    } else {
        event.target.parentElement.className = "done";
        event.target.innerHTML = "not done"
    }
}


document.getElementById("addButton").addEventListener("click", addItem);
const allBtn= document.getElementsByClassName("toggleStatus")


for(let i=0;i<allBtn.length;i++){
    allBtn[i].addEventListener("click", getDone)
}



const markTasks = ()=>{
    const tasks = document.querySelector("#list").children;
    for(let i=0; i<tasks.length;i++){
        if(tasks[i].className !== "done"){
            tasks[i].className = "done"
            tasks[i].children[1].innerHTML = "not done"
        }
    }
}




const filterTasks = (e)=>{
    let allTasks = document.getElementById("list").children;
    // for(let i=0; i<allTasks[i].length;i++){
    //     console.log(allTasks[i].children[0].innerHTML);
    // }
    for(let i=0;i<allTasks.length; i++){
        if(allTasks[i].children[0].innerHTML.toLowerCase().includes(e.target.value.toLowerCase())){
            allTasks[i].style = "display: inherit;"
        } else {
            allTasks[i].style = "display: none;"
        }
    }
}






document.getElementById("mark").addEventListener("click", markTasks);

document.getElementById("filterBox").addEventListener("input", filterTasks);

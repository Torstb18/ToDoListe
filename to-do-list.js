//Task-listen
let myList = document.getElementById("myList");

//Åpner de forskjellige tabbene(add Task, to-do og completed)
function openTab(evt, tabName){
    let i, tab, content;

    content = document.getElementsByClassName("content");
    for (i=0; i<content.length; i++){
        content[i].style.display="none";
    }

    tab = document.getElementsByClassName("tab");
    for(i=0; i<tab.length; i++){
    }

    document.getElementById(tabName).style.display = "";
  };

  //legger til oppgaver
  function addTask(){
    let list = document.createElement("list");
    let input = document.getElementById("input").value;
    let task = document.createTextNode(input);
    list.appendChild(task);
    if(input===""){
      alert("Add a task!")
    }else{
    let newTask = document.getElementById("input").value;
    if(localStorage.getItem("tasks")==null){
      localStorage.setItem("tasks", "[]");
    }
    let oldTask = JSON.parse(localStorage.getItem("tasks"));
    oldTask.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(oldTask));
  }
   };

   function showToDo(){
     
    let incompleteTask = document.getElementById("incompleteTask");
    incompleteTask.textContent=JSON.parse(localStorage.getItem("tasks"));
   }
   

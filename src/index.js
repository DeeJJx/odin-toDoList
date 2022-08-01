import './style.css';
import { projectFactory } from './project';
import { projectFormPopUp, hideSubmitForm } from './projectForm';

const addProjectButton = document.querySelector('.add-project-button');
const submitProjectButton = document.querySelector('#submit');
const closeProjectButton = document.querySelector('#close');
const projectToDoList = document.querySelector('.project-todo-list');
const addTodoButton = document.querySelector('.add-todo-button');
let projectList = [];
let activeProject;

addProjectButton.addEventListener('click', projectFormPopUp);
closeProjectButton.addEventListener('click', hideSubmitForm);


const addToDo = (e) => {
  e.preventDefault();
  //use key to select object in projectList array
   let thisProject = projectList[e.target.getAttribute("data-key")];

   let todoEntry = document.querySelector('#todo-entry').value;
   let dueDate = document.querySelector('#todo-due-date');
   
     //validate
  if(todoEntry == '' || dueDate == ''){
    alert('Please fill in all fields or select a date');
} else {
      thisProject.addTaskToChecklist(todoEntry, dueDate);
      displayProjectToDos(thisProject.checklist)
      document.getElementById("todo-entry-form").reset();
    }  
    console.log(thisProject);  
}

const removeToDo = (e) => {
  activeProject.checklist.removeChild(e.target.getAttribute("data-key"));
  displayProjectToDos(activeProject.checklist);
}   


addTodoButton.addEventListener('click', addToDo);

const displayProjectToDos = (checklistArray) => {
  //clear project todos from dom
  while(projectToDoList.firstChild) {
    projectToDoList.removeChild(projectToDoList.lastChild);
  }

  //add project todos to dom
  checklistArray.forEach((element) => {
      //create remove todo button and append to project div
    let removeProjectDivButton = document.createElement('div');
    removeProjectDivButton.addEventListener('click', removeToDo);
    removeProjectDivButton.innerHTML = 'remove';
    removeProjectDivButton.setAttribute('data-key', checklistArray.indexOf(element));
    removeProjectDivButton.classList.add('remove-todo');
    //create todo div
    let toDoDiv = document.createElement('div');

    let toDo = document.createElement('div');
    toDo.classList.add('toDo');
    toDo.innerHTML = element;

    toDoDiv.classList.add('toDoDiv');
    toDoDiv.appendChild(toDo);
    toDoDiv.appendChild(removeProjectDivButton);
    projectToDoList.appendChild(toDoDiv);

  });
}

const selectThisProject = (e) => {
  let key = e.target.getAttribute("data-key");
  let thisProject = projectList[e.target.getAttribute("data-key")];
  activeProject = projectList[e.target.getAttribute("data-key")];
  let projectTitle = document.querySelector(".project-view-title");
  projectTitle.innerHTML = thisProject.title;

  //remove data-key from addTodoButton, add new data-key
  if(addTodoButton.getAttribute("data-key") == key){
    return
  } else {
    addTodoButton.setAttribute("data-key", key)
  }

  displayProjectToDos(thisProject.checklist);

  //check to see which project object is active
  console.log(addTodoButton.getAttribute("data-key"));

}

const addToProjectsList = () => {
  //target last project in projectList
  let recentProject = projectList[projectList.length - 1];
  //create Project div
  let projectDiv = document.createElement('div');
    projectDiv.addEventListener('click', selectThisProject);
    projectDiv.innerHTML = recentProject.title;
    projectDiv.setAttribute('data-key', projectList.indexOf(recentProject));
    projectDiv.classList.add("dummy-project");
    let projectListDiv = document.querySelector(".project-list");
    projectListDiv.appendChild(projectDiv);
   // console.log(projectList);
}

//SUBMIT HAS TO GO IN INDEX BECAUSE OF CALL TO NEW PROJECT

const submitProjectForm = () => {

  //get form values
  let title = document.querySelector('#title').value;
  let description = document.querySelector('#description').value;
  let dueDate = document.querySelector('#dueDate').value;
  let priority = document.querySelector('#priority').value;

  //validate
  if(title == '' || description == '' || dueDate == '' || priority == ''){
      alert('Please fill in all fields')
  } else {
      const project = projectFactory(title, description, dueDate, priority);
      projectList.push(project);
   }
}

submitProjectButton.addEventListener('click', (e) => {
  e.preventDefault();
  submitProjectForm();
  addToProjectsList();
  
  document.getElementById("projectForm").reset();
    }
);






import './style.css';
import { projectFactory } from './project';
import { projectFormPopUp, hideSubmitForm } from './projectForm';

const addProjectButton = document.querySelector('.add-project-button');
const submitProjectButton = document.querySelector('#submit');
const closeProjectButton = document.querySelector('#close');
let projectList = [];

addProjectButton.addEventListener('click', projectFormPopUp);
closeProjectButton.addEventListener('click', hideSubmitForm);


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
  document.getElementById("projectForm").reset();
  console.log(projectList);
    }
);






const projectFormPopUp = () => {
   let hiddenForm = document.querySelector('.hidden');
   hiddenForm.classList.remove('hidden');
}

const hideSubmitForm = () => {
    let submitForm = document.querySelector('.form-container');
    submitForm.classList.add('hidden');
}



export { projectFormPopUp, hideSubmitForm }
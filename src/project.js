//project factory function

const projectFactory = (title, description, dueDate, priority) => {

    let checklist = [
                // {
                //     task:'',
                //     done:false,
                // },
                    ];
    let notes = '';

    let todoList = {
        text: '',
        checked: false
    }


    //Needs to change
    const addTaskToChecklist = (nameOfTask, dueDate) => {
        // let task = {
        //     taskName: nameOfTask,
        //     due: dueDate
        // }
        let task = nameOfTask;
        checklist.push(task);
    }

    //Needs to change
    const markTaskAsComplete = () => {
        // checklist[0].done = true;
    }
    

    return {title, description, dueDate, priority, checklist, todoList, notes, addTaskToChecklist, markTaskAsComplete}
}


export { projectFactory };
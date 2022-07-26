//project factory function

const projectFactory = (title, description, dueDate, priority) => {

    let checklist = [
                // {
                //     task:'',
                //     done:false,
                // },
                    ];
    let notes = '';


    //Needs to change
    const addTaskToChecklist = (nameOfTask, done) => {
        let task = {
            task: nameOfTask,
            complete: done
                };
        checklist.push(task);
    }

    //Needs to change
    const markTaskAsComplete = () => {
        // checklist[0].done = true;
    }
    

    return {title, description, dueDate, priority, checklist, notes, addTaskToChecklist, markTaskAsComplete}
}


export { projectFactory };
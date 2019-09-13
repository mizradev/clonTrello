new Vue({
    el: '#app',
    data: {
        lists: [ ]
    },
    methods: {
        addList() {
            const newList = {
                name: '',
                status: 'creating',
                tasks: [ ]
            };
            this.lists.push(newList);
        },
        saveList(list){
            if(this.verifyEmptyList(list)){
                swal("Error!", "The name list is required", "error");
            } else {
                list.status = 'saved';
            }
        },
        removeList(index){
            this.lists.splice(index, 1);
        },
        verifyEmptyTask(task){
            if(task.info == ''){
                return true;
            } else {
                return false;
            }
        },
        verifyEmptyList(list){
            if(list.name == ''){
                return true;
            } else {
                return false;
            }
        },
        addTask(index){
            const info = document.getElementById('task'+index).value;
            const newTask = { info: info,saved: true };
            if(this.verifyEmptyTask(newTask)){
                swal("Error!", "The name task is required", "error");
            } else {
                this.lists[index].tasks.push(newTask);
                document.getElementById('task'+index).value = '';
            }
        },
        deleteTask(tasks, index){
            tasks.splice(index, 1);
        },
        editTaskInput(elementId, task){
            const input = document.getElementById(elementId);
            task.saved = false;
            input.readOnly = false;
        },
        updateTask(elementId, task){
            const input = document.getElementById(elementId);
            task.saved = true;
            swal("Task updated!!", "Task updated!", "success");
            input.readOnly = true;
        }
    }
});

import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [tasks, setTasks] = useState([]);


    //ADD Task
    const addTask = task => {
        if(!task.text || /^\s*$/.test(task.text)){
            return
        }

        const newTasks = [task, ...tasks]

        setTasks(newTasks);
    }

    //UPDATE Task
    const updateTask = (taskId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)))
    }

    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id)

        setTasks(removeArr)
    }

    //REMOVE Task
    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
            if(task.id === id){
                task.isComplete = !task.isComplete;
            }
            return task
        })
        setTasks(updatedTasks);
    }

    return (
        <div>
            <TodoForm  onSubmit={addTask}/>
            <Todo tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask}/>
        </div>
    )
}

export default TodoList

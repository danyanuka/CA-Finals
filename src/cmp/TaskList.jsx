import { useState } from "react"

//cmps
import { TaskPreview } from "./TaskPreview"

//services
import { groupService } from "../services/group.service"


export function TaskList({ group, onAddTask }) {
    const tasks = group?.tasks
    const [isAdding, setIsAdding] = useState(false)
    const [taskTitle, setTaskTitle] = useState('')

    function handleIsAdding() {
        setIsAdding(!isAdding)
    }

    function handleChange(ev) {
        let { value } = ev.target
        setTaskTitle(value.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()))
    }

    function handleAddTask(ev) {
        ev.preventDefault()
        const taskToAdd = groupService.getDefaultTask(taskTitle)
        onAddTask(taskToAdd, group.id)
        setTaskTitle("")
        handleAddTask()
    }

    return (
        <ul className="task-list">
            <div className="group-header">
                <h4>{group.title}</h4>
                <i className="icon-show-options"></i>
            </div>
            {
                tasks?.map(task => <li className="task-item" key={task.id}>
                    <TaskPreview task={task} />

                </li>)
            }


            {!isAdding ? (
                <div className="group-footer">
                    <div className="add-task-button">
                        <li className='icon-add'></li>
                        <button onClick={handleIsAdding}>Add a card</button>
                    </div>
                    <i className="icon-template" title="create from template"></i>
                </div>
            ) : (
                <form onSubmit={handleAddTask}>
                    <input type="text" name='taskTitle' value={taskTitle} onChange={handleChange} placeholder='Enter task title...' />
                    <div className="add-task-buttons">
                        <button>Add task</button>
                        <button onClick={handleIsAdding}>X</button>
                    </div>
                </form>
            )}

        </ul>
    )
}

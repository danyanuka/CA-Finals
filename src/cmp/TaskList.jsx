import { useState } from "react"

//cmps
import { TaskPreview } from "./TaskPreview"

//modals
import { ShowOptionsModal } from "./Modals/ShowOptionsModal"

//services
import { groupService } from "../services/group.service"


export function TaskList({ group, onAddTask, onEditGroup }) {
    const tasks = group?.tasks
    const [isAdding, setIsAdding] = useState(false)
    const [editing, setEditing] = useState(false)
    const [isOpenOptions, setIsOpenOptions] = useState(false)
    const [groupTitle, setGroupTitle] = useState(group.title)
    const [taskTitle, setTaskTitle] = useState('')

    function handleIsAdding() {
        setIsAdding(!isAdding)
    }

    function handleChangeTaskTitle(ev) {
        let { value } = ev.target
        setTaskTitle(value.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()))
    }

    function handleChangeGroupTitle(ev) {
        let { value } = ev.target
        setGroupTitle(value.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()))
    }

    function handleAddTask(ev) {
        ev.preventDefault()
        const taskToAdd = groupService.getDefaultTask(taskTitle)
        onAddTask(taskToAdd, group.id)
        setTaskTitle("")
        setIsAdding(false)
    }

    function handlePressEnter(ev) {
        if (ev.key === 'Enter') {
            const groupTpUpdate = { ...group, title: groupTitle }
            onEditGroup(groupTpUpdate)
            setEditing(false)
        }
    }

    return (
        <>
            <ul className="task-list">

                <div className="group-header">
                    {editing ? (
                        <input className="edit-group-title" type="text" value={groupTitle} name="groupTitle" onChange={handleChangeGroupTitle} onKeyDown={handlePressEnter} />
                    ) : (
                        <h4 onClick={() => setEditing(true)}>{group.title}</h4>
                    )}
                    <i onClick={() => setIsOpenOptions(true)} className="icon-show-options"></i>

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
                        <input type="text" name='taskTitle' value={taskTitle} onChange={handleChangeTaskTitle} placeholder='Enter task title...' />
                        <div className="add-task-buttons">
                            <button>Add task</button>
                            <button onClick={handleIsAdding}>X</button>
                        </div>
                    </form>
                )}

            </ul>

            {/* {isOpenOptions &&
                <ShowOptionsModal />} */}
        </>
    )
}

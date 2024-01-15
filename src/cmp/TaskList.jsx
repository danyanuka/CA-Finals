import { useState } from "react"
import { Droppable } from 'react-beautiful-dnd';

//Redux
import { openModal } from "../store/actions/app.actions";
import { useDispatch } from "react-redux";

//cmps
import { TaskPreview } from "./TaskPreview"

//services
import { groupService } from "../services/group.service"


export function TaskList({ index, group, tasks, onAddTask, onEditGroup }) {
    const [isAdding, setIsAdding] = useState(false)
    const [isAddingFromModal, setIsAddingFromModal] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [groupTitle, setGroupTitle] = useState(group.title)
    const [taskTitle, setTaskTitle] = useState('')
    const dispatch = useDispatch();

    function onMoreOptions(ev) {
        dispatch(openModal("moreOptions", ev.target, handleIsAddingFromModal));
    }

    function handleIsAdding() {
        setIsAdding(!isAdding)
    }

    function handleIsAddingFromModal(bol) {
        setIsAddingFromModal(bol)
    }

    function handleIsEditing() {
        setIsEditing(!isEditing)
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
        console.log('hello');
        ev.preventDefault()
        ev.stopPropagation()
        const taskToAdd = groupService.getDefaultTask(taskTitle)
        const addToStart = isAddingFromModal ? true : false
        onAddTask(taskToAdd, group.id, addToStart)
        setTaskTitle("")
    }

    function handlePressEnter(ev) {
        if (ev.key === 'Enter') {
            const groupTpUpdate = { ...group, title: groupTitle }
            onEditGroup(groupTpUpdate)
            setIsEditing(false)
        }
    }

    return (
        <>
            <ul className="task-list">

                <div className="group-header" >
                    {isEditing ? (
                        <input className="edit-group-title"
                            type="text"
                            value={groupTitle}
                            name="groupTitle"
                            onBlur={handleIsEditing}
                            onChange={handleChangeGroupTitle}
                            onKeyDown={handlePressEnter}
                            autoFocus />
                    ) : (
                        <h4 className="group-title" onClick={handleIsEditing}>{group.title}</h4>
                    )}
                    <i onClick={onMoreOptions} className="icon-show-options"></i>

                </div>
                <div className="scrollbar">
                    {isAddingFromModal &&
                        <form onSubmit={handleAddTask}>
                            <li className="task-preview">
                                <input className="task-title-input"
                                    type="text"
                                    name='taskTitle'
                                    value={taskTitle}
                                    onBlur={() => setIsAddingFromModal(false)}
                                    onChange={handleChangeTaskTitle}
                                    placeholder='Enter a title for this task...'
                                    autoFocus />
                            </li>
                            <div className="add-task-buttons">
                                <button className="btn add-task-button">Add task</button>
                                <button className="btn close-button" onClick={() => setIsAddingFromModal(false)}>
                                    <i className="icon-close-regular"></i>
                                </button>
                            </div>
                        </form>
                    }

                    {/* // tasks?.map(task =>
                        //     <li className="task-item" key={task.id}>
                        //         <TaskPreview task={task} />
                        //     </li>) */}

                    <Droppable droppableId={group.id} index={index}>
                        {(provided) => (
                            <li className="task-item" ref={provided.innerRef} {...provided.droppableProps}>
                                {tasks?.map((task, index) => (
                                    <TaskPreview key={task.id} task={task} index={index} />
                                ))}
                                {provided.placeholder}
                            </li>
                        )}
                    </Droppable>


                </div>

                {!isAdding ? (
                    <div className="group-footer">
                        <div className="add-task-button">
                            <li className='icon-add-task'></li>
                            <button onClick={handleIsAdding}>Add a task</button>
                        </div>
                        <i className="icon-template" title="create from template"></i>
                    </div>
                ) : (

                    <form onSubmit={handleAddTask}>
                        <li className="task-preview">
                            <input className="task-title-input"
                                type="text"
                                name='taskTitle'
                                value={taskTitle}
                                onChange={handleChangeTaskTitle}
                                placeholder='Enter a title for this task...'
                                autoFocus
                                onBlur={handleIsAdding}
                            />

                        </li>
                        <div className="add-task-buttons">
                            <button className="btn add-task-button" onClick={handleAddTask}>Add task</button>
                            <button className="btn close-button" onClick={handleIsAdding}><i className="icon-close-add-task"></i></button>
                        </div>
                    </form>

                )}

            </ul>

        </>
    )
}

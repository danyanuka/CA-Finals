import { useState } from "react"
import { Droppable } from 'react-beautiful-dnd';

//Redux
import { openModal } from "../../store/actions/app.actions";
import { useDispatch } from "react-redux";

//cmps
import { TaskPreview } from "./TaskPreview"

//services
import { groupService } from "../../services/group.service"


export function TaskList({ index, group, tasks, onAddTask, onEditGroup, onUpdateTask }) {
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

    function handleOnBlur(ev) {
        if (taskTitle !== '') {
            handleAddTask(ev)
        }
        handleIsAdding()
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
                <div className="icon-wrapper transparent-btn-black">
                    <i onClick={onMoreOptions} className="icon-show-options"></i>
                </div>

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
                                autoFocus
                                autoComplete='off' />
                        </li>

                        <div className="add-task-buttons">
                            <button className="btn add-task-button">Add card</button>
                            <button className="btn transparent-btn-black close-button" onClick={() => setIsAddingFromModal(false)}>
                                <i className="icon-close-add-task"></i>
                            </button>
                        </div>
                    </form>
                }

                <Droppable droppableId={group.id} index={index} type="task">
                    {(provided) => (
                        <li className="task-item" ref={provided.innerRef} {...provided.droppableProps} {...provided.dragHandleProps}>
                            {tasks?.map((task, index) => (
                                <TaskPreview key={task.id} task={task} index={index} groupId={group.id} onUpdateTask={onUpdateTask} />
                            ))}
                            {provided.placeholder}
                        </li>
                    )}
                </Droppable>

                {isAdding &&
                    <form className="add-task-form" onSubmit={handleAddTask}>
                        <li className="task-preview input-add-task">
                            <input className="task-title-input"
                                type="text"
                                name='taskTitle'
                                value={taskTitle}
                                onChange={handleChangeTaskTitle}
                                placeholder='Enter a title for this task...'
                                autoFocus
                                onBlur={(ev) => handleOnBlur(ev)}
                                autoComplete='off'
                            />

                        </li>
                        <div className="add-task-buttons">
                            <button className="btn add-task-button" onClick={handleAddTask}>Add card</button>
                            <button className="btn close-button transparent-btn-black" onClick={handleIsAdding}><i className="icon-close-add-task"></i></button>
                        </div>
                    </form>}
            </div>

            {!isAdding &&
                <div className="group-footer">
                    <button className="add-task-button transparent-btn-black" onClick={handleIsAdding}>
                        <li className='icon-add-task'></li>
                        <div >Add a card</div>
                    </button>
                    <i className="transparent-btn-black icon-template" title="create from template"></i>

                </div>
            }

        </ul>
    )
}

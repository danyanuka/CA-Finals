import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';

//cmps
import { GroupPreview } from './GroupPreview'

//services
import { groupService } from '../services/group.service'

export function GroupList({ board, onAddGroup, onAddTask, onEditGroup }) {
    const groups = board?.groups
    const [isAdding, setIsAdding] = useState(false)
    const [isClick, setIsClick] = useState(false)
    const [groupTitle, setGroupTitle] = useState('')

    function handleIsAdding() {
        setIsAdding(!isAdding)
    }

    function handleChange(ev) {
        let { value } = ev.target
        setGroupTitle(value.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()))
    }

    function handleAddGroup(ev) {
        ev.preventDefault()
        const groupToAdd = groupService.getDefaultGroup(groupTitle)
        onAddGroup(groupToAdd)
        setGroupTitle("")
        setIsAdding(false)
    }

    function handleOnBlur() {
        if (isClick) return
        handleIsAdding(false)
    }

    function onDragEnd(result) {
        const { destination, source, draggableId } = result;
        // console.log("source.index", source.index);
        // console.log("destination.index", destination.index);

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }


        const startGroup = groups.find((group) => group.id === source.droppableId)
        const finishGroup = groups.find((group) => group.id === destination.droppableId)

        if (startGroup.id === finishGroup.id) {
            const newTasks = startGroup.tasks;
            // console.log("newTasks", newTasks);
            const taskToReplace = newTasks.find((task) => task.id === draggableId)
            console.log("taskToReplace", taskToReplace);

            newTasks.splice(source.index, 1);
            // console.log("newTasks", newTasks);
            newTasks.splice(destination.index, 0, taskToReplace);
            // console.log("newTasks", newTasks);

            const newGroup = {
                ...startGroup,
                tasks: newTasks,
            };
            onEditGroup(newGroup)
            return
        }

        // Moving from one list to another
        const startTasks = startGroup.tasks;
        const taskToReplace = startTasks.find((task) => task.id === draggableId)
        startTasks.splice(source.index, 1);

        const newStart = {
            ...startGroup,
            tasks: startTasks,
        };

        const finishTasks = finishGroup.tasks;
        finishTasks.splice(destination.index, 0, taskToReplace);

        const newFinish = {
            ...finishGroup,
            tasks: finishTasks,
        };

        onEditGroup(newStart)
        onEditGroup(newFinish)
    }


    return (

        <ul className="group-list">

            <DragDropContext onDragEnd={onDragEnd}>

                {groups?.map((group, index) => <li className='group-item' key={group.id} >
                    <GroupPreview groups={groups} index={index} group={group} onAddTask={onAddTask} onEditGroup={onEditGroup} />

                </li>)}

            </DragDropContext>

            <li className="group-item action">
                {!isAdding ? (
                    <div className='add-group-button'>
                        <li className='icon-add'></li>
                        <button onClick={handleIsAdding}>Add another Group</button>
                    </div>
                ) : (
                    <form className="add-group-form" onSubmit={handleAddGroup}>

                        <input className='group-title-input'
                            type="text"
                            name='groupTitle'
                            value={groupTitle}
                            onBlur={handleOnBlur}
                            onChange={handleChange}
                            placeholder='Enter group title...'
                            autoFocus />

                        <div className="add-group-buttons">
                            <button onClick={(() => setIsClick(true))}>Add group</button>
                            <button onClick={handleIsAdding}><li className="icon-close-regular"></li></button>
                        </div>

                    </form>
                )}
            </li>
            {/* <AddGroupOrTask onAddGroup={onAddGroup} type={'Group'}/> */}
        </ul>


    )
}

import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

//cmps
import { GroupPreview } from './GroupPreview'

//services
import { groupService } from '../../services/group.service'

//store
import { boardActions } from "../../store/actions/board.actions";


export function GroupList({ board, onAddGroup, onAddTask, onEditGroup, onUpdateTask }) {
    const groups = board?.groups
    const [isAdding, setIsAdding] = useState(false)
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


    function handleOnBlur(ev) {
        if (groupTitle !== '') {
            handleAddGroup(ev)
        }
        handleIsAdding()
    }

    function onDragEnd(result) {
        const { destination, source, draggableId, type } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }


        if (type === 'group') {
            const [removed] = groups.splice(source.index, 1);
            groups.splice(destination.index, 0, removed);

            const newBoard = {
                ...board,
                groups: groups,
            };
            return boardActions.saveBoard(newBoard);
        }

        const startGroup = groups.find((group) => group.id === source.droppableId)
        const finishGroup = groups.find((group) => group.id === destination.droppableId)

        if (startGroup.id === finishGroup.id) {
            const newTasks = startGroup.tasks;
            const taskToReplace = newTasks.find((task) => task.id === draggableId)

            newTasks.splice(source.index, 1);
            newTasks.splice(destination.index, 0, taskToReplace);

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

        <ul className="group-list-ul">

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='all-groups' direction='horizontal' type='group'>
                    {(provided) => (
                        <div className="group-list" {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                groups?.map((group, index) =>
                                    <li className='group-item' key={group.id} >
                                        <GroupPreview groups={groups} index={index} group={group} onAddTask={onAddTask} onEditGroup={onEditGroup} onUpdateTask={onUpdateTask} />
                                    </li>)
                            }
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
            </DragDropContext>

            <li className="group-item">
                {!isAdding ? (
                    <>
                        {board?.style.backgroundImage === "" ? (
                            <button onClick={handleIsAdding} className='action add-group-button transparent-btn-black'>
                                <li className='icon-add-non-style'></li>
                                <div>Add another group</div>
                            </button>) : (
                            <button onClick={handleIsAdding} className='action add-group-button-styled transparent-btn-black'>

                                <li className='icon-add-group'></li>
                                <div>Add another group</div>
                            </button>
                        )}
                    </>

                ) : (
                    <form className="add-group-form" onSubmit={handleAddGroup}>

                        <input className='group-title-input'
                            type="text"
                            name='groupTitle'
                            value={groupTitle}
                            onBlur={(ev) => handleOnBlur(ev)}
                            onChange={handleChange}
                            placeholder='Enter group title...'
                            autoFocus />

                        <div className="add-group-buttons">
                            <button className='add-group-button'>Add group</button>
                            <button className='close-button transparent-btn-black' onClick={handleIsAdding}><li className="icon-close-regular"></li></button>
                        </div>

                    </form>
                )}
            </li>
            {/* <AddGroupOrTask onAddGroup={onAddGroup} type={'Group'}/> */}
        </ul>


    )
}

import { useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

//cmps
import { GroupPreview } from './GroupPreview'

//services
import { groupService } from '../../services/group.service'

//store
import { boardActions } from "../../store/actions/board.actions";
import { utilService } from '../../services/util.service';


export function GroupList({ board, onAddGroup, onAddTask, onEditGroup, onUpdateTask }) {
    const groups = board?.groups
    const [isAdding, setIsAdding] = useState(false)
    const [groupTitle, setGroupTitle] = useState('')
    const [avgColorBg, setAvgColorBg] = useState("#FFFFFF");
    const [isDarkColor, setIsDarkColor] = useState(utilService.isDarkColor(avgColorBg, 80))
    const [styleDiv, setStyleDiv] = useState();
    const [styleButton, setStyleButton] = useState();


    useEffect(() => {
        async function setColorAsync() {
            const avgColor = await getBoardAvgColor(board);
            setAvgColorBg(avgColor);
        }
        setColorAsync();
    }, [board]);

    useEffect(() => {
        setStyles();
    }, [avgColorBg]);

    async function getBoardAvgColor(board) {
        if (board?.style?.backgroundImage) {
            const imgPath = board.style.backgroundImage;
            const cleanImgUrl = utilService.getCleanURL(imgPath);
            return utilService.getImgAvgColor(cleanImgUrl);
        } else if (board?.style?.backgroundColor) {
            const bgColor = board.style.backgroundColor;
            return new Promise((resolve, reject) => resolve(bgColor));
        } else {
            return new Promise((resolve, reject) => resolve("#FFFFFF"));
        }
    }

    function setStyles() {
        let buttonStyle = {};
        let divStyle = {};
        buttonStyle.backgroundColor = avgColorBg + "c1";
        divStyle.color = utilService.isDarkColor(avgColorBg, 80)
            ? "#FFFFFF"
            : "#172b4d";

        setStyleDiv(divStyle);
        setStyleButton(buttonStyle);
        setIsDarkColor(utilService.isDarkColor(avgColorBg, 80))
    }

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
                        <div className="group-list" {...provided.droppableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
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
                    <div style={styleButton} className="add-another-group-wrapper">
                        <button onClick={handleIsAdding} className={'add-another-group transparent-btn-' + (isDarkColor ? "white" : "black")}>
                            <div className={!isDarkColor ? "icon-add-task" : "icon-add-group"}></div>
                            <div style={styleDiv}>Add another list</div>
                        </button>
                    </div>

                ) : (
                    // <div className="add-group-form">
                    <div className="add-group-form" onBlur={(ev) => handleOnBlur(ev)}>
                        <input className='group-title-input'
                            type="text"
                            name='groupTitle'
                            value={groupTitle}
                            onChange={handleChange}
                            placeholder='Enter list title...'
                            autoFocus
                            autoComplete='off'
                        />

                        <div className="add-group-buttons">
                            <button className='add-group-button basic-btn-blue' onClick={handleAddGroup}>Add list</button>
                            <button className='close-button transparent-btn-black' onClick={handleIsAdding}><li className="icon-close-regular"></li></button>
                        </div>

                    </div>
                )}
            </li>
            {/* <AddGroupOrTask onAddGroup={onAddGroup} type={'Group'}/> */}
        </ul>


    )
}

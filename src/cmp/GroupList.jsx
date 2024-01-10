import { useState } from 'react'

//cmps
import { GroupPreview } from './GroupPreview'

//services
import { groupService } from '../services/group.service'

export function GroupList({ board, onAddGroup, onAddTask, onEditGroup }) {
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

    return (

        <ul className="group-list">
            {
                groups?.map(group => <li className='group-item' key={group.id}>
                    <GroupPreview groups={groups} group={group} onAddTask={onAddTask} onEditGroup={onEditGroup} />

                </li>)
            }

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
                            onBlur={handleIsAdding}
                            onChange={handleChange}
                            placeholder='Enter group title...'
                            autoFocus />

                        <div className="add-group-buttons">
                            <button>Add group</button>
                            <button onClick={handleIsAdding}><li className="icon-close-regular"></li></button>
                        </div>

                    </form>
                )}
            </li>
        </ul>


    )
}

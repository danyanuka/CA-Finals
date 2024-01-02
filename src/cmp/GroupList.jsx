import { useState } from 'react'

//cmps
import { GroupPreview } from './GroupPreview'

//services
import { groupService } from '../services/group.service'

export function GroupList({ board, onAddList, onAddTask }) {
    const groups = board?.groups
    const [isAdding, setIsAdding] = useState(false)
    const [listTitle, setListTitle] = useState('')

    function handleIsAdding() {
        setIsAdding(!isAdding)
    }

    function handleChange(ev) {
        let { value } = ev.target
        setListTitle(value.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()))
    }


    function handleAddList(ev) {
        ev.preventDefault()
        const listToAdd = groupService.getDefaultList(listTitle)
        onAddList(listToAdd)
        setListTitle("")
        handleAddList()
    }

    return (

        <ul className="group-list">
            {
                groups?.map(group => <li className='group-item' key={group.id}>
                    <GroupPreview group={group} onAddTask={onAddTask} />

                </li>)
            }

            <li className="group-item action">
                {!isAdding ? (
                    <div className='add-list-button'>
                        <li className='icon-add'></li>
                        <button onClick={handleIsAdding}>Add another list</button>
                    </div>
                ) : (
                    <form className="add-list-form" onSubmit={handleAddList}>
                        <input className='list-title-input' type="text" name='listTitle' value={listTitle} onChange={handleChange} placeholder='Enter list title...' />
                        <div className="add-list-buttons">
                            <button>Add list</button>
                            <button onClick={handleIsAdding}>X</button>
                        </div>
                    </form>
                )}
            </li>
        </ul>


    )
}

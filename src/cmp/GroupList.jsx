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
        setListTitle(value)
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
                    <button onClick={handleIsAdding}>Add another list</button>
                ) : (
                    <form onSubmit={handleAddList}>
                        <input type="text" name='listTitle' value={listTitle} onChange={handleChange} placeholder='Enter list title...' />
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

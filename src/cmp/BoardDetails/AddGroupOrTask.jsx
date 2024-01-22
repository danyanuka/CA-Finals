// import { useState } from 'react'
// import { groupService } from '../services/group.service'

// export function AddGroupOrTask({ type, onAddGroup }) {
//     const [isAdding, setIsAdding] = useState(false)
//     const [isClick, setIsClick] = useState(false)
//     const [title, setTitle] = useState('')

//     function handleIsAdding() {
//         setIsAdding(!isAdding)
//     }

//     function handleChange(ev) {
//         let { value } = ev.target
//         setTitle(value.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()))
//     }

//     function handleOnBlur() {
//         if (isClick) return
//         handleIsAdding(false)
//     }

//     function handleAdd(ev) {
//         ev.preventDefault()
//         if(type === "Group"){
//             const groupToAdd = groupService.getDefaultGroup(title)
//             onAddGroup(groupToAdd)
//         } else{
//             const taskToAdd = groupService.getDefaultTask(title)
//             const addToStart = isAddingFromModal ? true : false
//             onAddTask(taskToAdd, group.id, addToStart)
//         }
      
//         setTitle("")
//         setIsAdding(false)
//     }

//     return (
//         <li className="group-item action">
//             {!isAdding ? (
//                 <div className='add-group-button'>
//                     <li className='icon-add'></li>
//                     <button onClick={handleIsAdding}>Add another {type}</button>
//                 </div>
//             ) : (
//                 <form className="add-group-form" onSubmit={handleAdd}>
//                     <input className='group-title-input'
//                         type="text"
//                         name='groupTitle'
//                         value={title}
//                         onBlur={handleOnBlur}
//                         onChange={handleChange}
//                         placeholder='Enter group title...'
//                         autoFocus />

//                     <div className="add-group-buttons">
//                         <button onClick={(() => setIsClick(true))}>Add group</button>
//                         <button onClick={handleIsAdding}><li className="icon-close-regular"></li></button>
//                     </div>

//                 </form>
//             )}
//         </li>
//     )
// }
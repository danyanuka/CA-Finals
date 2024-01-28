import { useState } from "react";

//Modals
import { RootModalHeader } from "../RootModalHeader";

//Services
import { groupService } from "../../services/group.service";

//Cmp
import { MemberPreview } from './MemberPreview'


export function MdlTaskMembers({ board, group, task }) {
    const [search, setSearch] = useState('')


    function handleChange(ev) {
        setSearch(ev.target.value)
    }

    // function handleSearchMember(fullname) {
    //     const lowerCaseStr = fullname.toLowerCase()

    //     const member = board.members.filter(member =>
    //         (member.fullname.toLowerCase().includes(lowerCaseStr)))
    //     return member
    // }

    async function handleAddMember(memberId) {
        const memberInx = task.memberIds.findIndex(member => member === memberId)
        if (memberInx >= 0) {
            task.memberIds.splice(memberInx, 1)
        } else {
            task.memberIds.push(memberId)
        }
        groupService.updateTask(task, group.id, board);
    }

    return (
        <div className="mdl-task-members">
            <RootModalHeader title="Members" />
            <div style={{ padding: "12px" }}>
                <input type="text" name="search" className="search" placeholder="Search members" onChange={handleChange} />

                <p className="members-title">Board members</p>
                <ul className="members">
                    {board?.members.map((member, i) => {
                        return <li key={i} onClick={() => handleAddMember(member._id, i)} className="member-preview transparent-btn-black" >
                            <MemberPreview task={task} member={member} />
                        </li>
                    })}

                </ul>
            </div>
        </div >
    );
}

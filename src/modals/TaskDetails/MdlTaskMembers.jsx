import { useEffect, useState } from "react";

//Modals
import { RootModalHeader } from "../RootModalHeader";

//Services
import { groupService } from "../../services/group.service";

//Cmp
import { MemberPreview } from './MemberPreview'

export function MdlTaskMembers({ board, group, task }) {
    const [searchMember, setSearchMember] = useState('')
    const [boardMembers, setBoardMembers] = useState(board.members)

    useEffect(() => {
        loadMembers()
    }, [searchMember])

    function handleChange(ev) {
        setSearchMember(ev.target.value)
    }

    function loadMembers() {
        const lowerCaseStr = searchMember.toLowerCase()
        const members = board.members.filter(member =>
            (member.fullname.toLowerCase().includes(lowerCaseStr)))
        setBoardMembers(members)
    }

    function handleAddMember(memberId) {
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
                <input type="text" name="search" className="search" placeholder="Search members" onChange={handleChange} value={searchMember} />

                <p className="members-title">Board members</p>
                <ul className="members">
                    {boardMembers?.map((member, i) => {
                        return <li key={i} onClick={() => handleAddMember(member._id, i)} className="member-preview transparent-btn-black" >
                            <MemberPreview task={task} member={member} />
                        </li>
                    })}

                </ul>
            </div>
        </div >
    );
}

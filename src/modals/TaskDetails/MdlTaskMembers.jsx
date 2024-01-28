import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";
import { useSelector } from "react-redux";
import { UserAvatar } from "../../cmp/UserAvatar";
import { groupService } from "../../services/group.service";
import { useState } from "react";

export function MdlTaskMembers({ board, group, task }) {
    const [search, setSearch] = useState('')

    function getMemberFullName(memberId) {
        const memberIndex = board.members.findIndex((mem) => mem._id === memberId)
        return board.members[memberIndex]?.fullname
    }

    function getMemberImg(memberId) {
        const userIndx = board.members.findIndex((mem) => mem._id === memberId)
        if (userIndx >= 0 && board.members[userIndx]?.imgUrl)
            return board.members[userIndx]?.imgUrl
        return null
    }

    function handleChange(ev) {
        setSearch(ev.target.value)
    }

    function handleSearchMember(fullname) {
        const lowerCaseStr = fullname.toLowerCase()

        const member = board.members.filter(member =>
            (member.fullname.toLowerCase().includes(lowerCaseStr)))
        return member
    }

    async function handleAddMember(memberId) {
        const memberInx = task.memberIds.findIndex(member => member === memberId)

        if (memberInx >= 0) {
            task.memberIds.splice(memberInx, 1)
        } else {
            task.memberIds.push(memberId)
        }

        console.log(task);
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
                            <div className="member-info">
                                <UserAvatar userFullName={getMemberFullName(member._id)} userImg={getMemberImg(member._id)} />
                                <p> {member.fullname} </p>
                            </div>
                            {task.memberIds.findIndex(id => id === member._id) >= 0 &&
                                <i className="icon-task-check-mark-black"></i>
                            }
                        </li>
                    })}

                </ul>
            </div>
        </div>
    );
}

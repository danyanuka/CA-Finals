import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";
import { useSelector } from "react-redux";
import { UserAvatar } from "../../cmp/UserAvatar";
import { groupService } from "../../services/group.service";

export function MdlTaskMembers({ board, task }) {

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

    async function handleAddMember(memberId) {
        task.memberIds.push(memberId)
        console.log(task);
        // groupService.updateTask(newTask, groupId, board);

    }

    return (
        <div className="mdl-task-members">
            <RootModalHeader title="Members" />
            <div style={{ padding: "12px" }}>
                <input type="text" name="search" className="search" placeholder="Search members" />

                <p className="members-title">Board members</p>
                <ul className="members">
                    {board?.members.map((member, i) => {
                        return <li key={i} onClick={() => handleAddMember(member._id)}>
                            <UserAvatar userFullName={getMemberFullName(member._id)} userImg={getMemberImg(member._id)} />
                            <p> {member.fullname} </p>
                        </li>
                    })}

                </ul>
            </div>
        </div>
    );
}

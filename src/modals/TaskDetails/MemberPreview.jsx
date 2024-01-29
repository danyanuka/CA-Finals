import { useSelector } from "react-redux";
import { UserAvatar } from "../../cmp/UserAvatar";

export function MemberPreview({ task, member }) {
    const board = useSelector(storeState => storeState.boardModule.curBoard)

    function getMemberFullName(memberId) {
        const memberIndex = board.members.findIndex((mem) => mem._id === memberId)
        return board.members[memberIndex]?.fullname
    }

    function getMemberImg(memberId) {
        const userIndx = board.members?.findIndex((mem) => mem._id === memberId)
        if (userIndx >= 0 && board.members[userIndx]?.imgUrl)
            return board.members[userIndx]?.imgUrl
        return null
    }
    return (
        <>
            <div className="member-info">
                <UserAvatar userFullName={getMemberFullName(member._id)} userImg={getMemberImg(member._id)} />
                <p> {member.fullname} </p>
            </div>
            {task.memberIds?.findIndex(id => id === member._id) >= 0 &&
                < i className="icon-task-check-mark-black"></i>
            }
        </>
    )
}
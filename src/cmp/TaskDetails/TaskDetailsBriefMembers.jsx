import { useEffect, useState } from "react";

import { utilService } from "/src/services/util.service.js";

import {UserAvatar} from "/src/cmp/UserAvatar";


export function TaskDetailsBriefMembers({ boardMembers, taskMembers, cbOpenTaskModal }) {

    function getMemberFullName(memberId) {
        const memberIndex = boardMembers.findIndex((mem) => mem._id === memberId)
        return boardMembers[memberIndex]?.fullname
    }

    function getMemberImg(memberId) {
        const userIndx = boardMembers.findIndex((mem) => mem._id === memberId)
        if (userIndx > 0 && boardMembers[userIndx]?.imgUrl)
            return boardMembers[userIndx]?.imgUrl
        return "/public/imgs/defaultUserImg.png"
    }

    return <div className="td-members brief-item">
        <h3>Members</h3>
        <div className="brief-data">
            {taskMembers.map((memberId, i) => {
                return <div key={i}>
                    <UserAvatar userFullName={getMemberFullName(memberId)} userImg={getMemberImg(memberId)} />
                </div>
            })}
            <button className="transparent-btn-black">

            </button>
        </div>
    </div>
}
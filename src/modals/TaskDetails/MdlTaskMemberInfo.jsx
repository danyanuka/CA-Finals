import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";

export function MdlTaskMemberInfo({ }) {
    return (
        <div className="mdl-task-member-info">
            <div style={{padding: "12px"}}>
                hey there -
                taskMemberInfo
            </div>
        </div>
    );
}

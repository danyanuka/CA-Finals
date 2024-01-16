import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";

export function MdlTaskMembers({ }) {
    return (
        <div className="mdl-task-members">
            <RootModalHeader title="Members" />
            <div style={{padding: "12px"}}>
                hey there
            </div>
        </div>
    );
}

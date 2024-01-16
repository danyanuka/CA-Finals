import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";

export function MdlTaskCopy({ }) {
    return (
        <div className="mdl-task-copy">
            <RootModalHeader title="Copy card" />
            <div style={{padding: "12px"}}>
                hey there
            </div>
        </div>
    );
}

import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";

export function MdlTaskLabels({ board, group, task }) {
    return (
        <div className="mdl-task-labels">
            <RootModalHeader title="Labels" />
            <div style={{padding: "12px"}}>
                hey there
            </div>
        </div>
    );
}

import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";

export function MdlTaskChecklist({ }) {
    return (
        <div className="mdl-task-checklist">
            <RootModalHeader title="Add Checklist" />
            <div style={{padding: "12px"}}>
                hey there
            </div>
        </div>
    );
}

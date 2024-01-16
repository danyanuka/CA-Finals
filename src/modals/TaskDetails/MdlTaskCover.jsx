import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";

export function MdlTaskCover({ }) {
    return (
        <div className="mdl-task-cover">
            <RootModalHeader title="Cover" />
            <div style={{padding: "12px"}}>
                hey there
            </div>
        </div>
    );
}

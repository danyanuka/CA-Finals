import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";

export function MdlTaskMove({ }) {
    return (
        <div className="mdl-task-move">
            <RootModalHeader title="Move card" />
            <div style={{padding: "12px"}}>
                hey there
            </div>
        </div>
    );
}

import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";

export function MdlTaskShare({ }) {
    return (
        <div className="mdl-task-Share">
            <RootModalHeader title="Share and more..." />
            <div style={{padding: "12px"}}>
                hey there
            </div>
        </div>
    );
}

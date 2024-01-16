import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";

export function MdlTaskAttach({ }) {
    return (
        <div className="mdl-task-attach">
            <RootModalHeader title="Attach" />
            <div style={{padding: "12px"}}>
                hey there
            </div>
        </div>
    );
}

import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "../RootModalHeader";

export function MdlTaskDates({ }) {
    return (
        <div className="mdl-task-dates">
            <RootModalHeader title="Dates" />
            <div style={{padding: "12px"}}>
                hey there
            </div>
        </div>
    );
}

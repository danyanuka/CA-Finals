import { useDispatch } from "react-redux"
import { closeModal } from "/src/store/actions/app.actions";
import { RootModalHeader } from "./RootModalHeader";

export function ShowOptionsModal({ handleIsAddingFromModal }) {
    const dispatch = useDispatch();

    function onAddTask() {
        handleIsAddingFromModal(true)
        dispatch(closeModal());
    }
    return (

        <>
            <RootModalHeader title="Group actions" />
            <div className="show-options-modal">
                <div className="modal-actions">
                    <div className="action">
                        <button onClick={onAddTask}>Add task</button>
                    </div>
                    <div className="action">
                        <button>Copy group</button>
                    </div>
                    <div className="action">
                        <button>Move group</button>
                    </div>
                    <div className="action">
                        <button>Watch</button>
                    </div>
                </div>
                <div className="modal-action-sort action">
                    <button>Sort by...</button>
                </div>
                <div className="modal-actions-automation">
                    <h6 className="group-automation-title">Automation</h6>
                    <div className="action">
                        <button>When a task is added to group...</button>
                    </div>
                    <div className="action">
                        <button>Every day sort group by...</button>
                    </div>
                    <div className="action">
                        <button>Every monday sort group by..</button>
                    </div>
                    <div className="action">
                        <button>Create a rule</button>
                    </div>

                </div>
                <div className="modal-more-actions">
                    <div className="action">
                        <button>Move all tasks in this group</button>
                    </div>
                    <div className="action">
                        <button>Archive all tasks in this group</button>
                    </div>
                </div>
                <div className="modal-action action">
                    <button>Archive this group</button>
                </div>

            </div>
        </>
    )
}

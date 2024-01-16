import { useDispatch } from "react-redux";
import { openModal } from "/src/store/actions/app.actions";

export function TaskDetailsSideBar() {

    const dispatch = useDispatch();
    
    function openMembersModal(ev) {
        dispatch(openModal("taskMembers", ev.target, {}));
    }
    function openLabelsModal(ev) {
        dispatch(openModal("taskLabels", ev.target, {}));
    }
    function openChecklistModal(ev) {
        dispatch(openModal("taskChecklist", ev.target, {}));
    }
    function openDatesModal(ev) {
        dispatch(openModal("taskDates", ev.target, {}));
    }
    function openAttachModal(ev) {
        dispatch(openModal("taskAttach", ev.target, {}));
    }
    function openCoverModal(ev) {
        dispatch(openModal("taskCover", ev.target, {}));
    }
    function openMoveModal(ev) {
        dispatch(openModal("taskMove", ev.target, {}));
    }
    function openCopyModal(ev) {
        dispatch(openModal("taskCopy", ev.target, {}));
    }
    function openShareModal(ev) {
        dispatch(openModal("taskShare", ev.target, {}));
    }

    function dummy(ev) {
        console.log("dummy: ", ev)
    }

    return <aside className="task-details-sidebar">
        <div className="task-details-sidebar-prop">
            <h3 className="sidebar-header">Add to card</h3>
            <button onClick={openMembersModal} className="td-btn task-details-sidebar-members">
                <i className="icon-task-members"></i>
                Member
            </button>
            <button onClick={openLabelsModal} className="td-btn task-details-sidebar-labels">
                <i className="icon-task-labels"></i>
                Labels
            </button>
            <button onClick={openChecklistModal} className="td-btn task-details-sidebar-checklists">
                <i className="icon-task-checklist"></i>
                Checklists
            </button>
            <button onClick={openDatesModal} className="td-btn task-details-sidebar-dates">
                <i className="icon-task-dates"></i>
                Dates
            </button>
            <button onClick={openAttachModal} className="td-btn task-details-sidebar-attachments">
                <i className="icon-task-attachments"></i>
                Attachments
            </button>
            <button onClick={openCoverModal} className="td-btn task-details-sidebar-cover">
                <i className="icon-task-cover"></i>
                Cover
            </button>
        </div>
        <div className="task-details-sidebar-actions">
            <h3 className="sidebar-header">Actions</h3>
            <button onClick={openMoveModal} className="td-btn task-details-sidebar-move">
                <i className="icon-task-move"></i>
                Move
            </button>
            <button onClick={openCopyModal} className="td-btn task-details-sidebar-copy">
                <i className="icon-task-copy"></i>
                Copy
            </button>
            <button onClick={dummy} className="td-btn task-details-sidebar-template">
                <i className="icon-task-make-template"></i>
                Make template
            </button>
            <button onClick={dummy} className="td-btn task-details-sidebar-archive">
                <i className="icon-task-archive"></i>
                Archive
            </button>
            <button onClick={openShareModal} className="td-btn task-details-sidebar-share">
                <i className="icon-task-share"></i>
                Share
            </button>
        </div>
    </aside>
}

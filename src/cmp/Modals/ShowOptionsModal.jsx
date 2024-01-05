
export function ShowOptionsModal() {

    return (
        <div className="show-options-modal">
            <div className="modal-header">
                {/* not finish */}
                <span></span>
                <h5 className="group-action-title">Group actions</h5>
                <button><i className="icon-close-regular"></i></button>
            </div>
            <div className="modal-actions">
                <button>Add task</button>
                <button>Copy group</button>
                <button>Move group</button>
                <button>Watch</button>
            </div>
            <div className="modal-action-sort">
                <button>Sort by...</button>
            </div>
            <div className="modal-actions-automation">
                <h6 className="group-automation-title">Automation</h6>
                <button>When a task is added to group...</button>
                <button>Every day sort group by...</button>
                <button>Every monday sort group by..</button>
                <button>Create a rule</button>
            </div>
            <div className="modal-more-actions">
                <button>Move all tasks in this group</button>
                <button>Archive all tasks in this group</button>
            </div>
            <div className="modal-action">
                <button>Archive this group</button>
            </div>

        </div>
    )
}

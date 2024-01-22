

export function TaskDetailsBriefLabels({ boardLabels, taskLabels, cbOpenTaskModal }) {

    return <div className="td-labels brief-item">
        <h3>Labels</h3>
        <div className="brief-data">
            {taskLabels.map((labelId, i) => {
                return <button key={i} style={{backgroundColor: "silver"}}>
                    <p>{labelId}</p>
                </button>
            })}
            <button className="transparent-btn-neutral add-btn" onClick={(ev) => cbOpenTaskModal(ev, "taskLabels")} >
                <i className="icon-task-plus"></i>
            </button>
        </div>
    </div>
}
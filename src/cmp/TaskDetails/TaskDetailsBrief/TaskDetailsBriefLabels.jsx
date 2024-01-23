

export function TaskDetailsBriefLabels({ boardLabels, taskLabels, cbOpenTaskModal }) {

    function getLabelTitle(labelId) {
        const labelIndx = boardLabels.findIndex((label) => label.id === labelId)
        const labelTitle = boardLabels[labelIndx]?.title
        return labelTitle ? labelTitle : "N/A"
    }

    function getLabelColor(labelId) {
        const labelIndx = boardLabels.findIndex((label) => label.id === labelId)
        const labelColor = boardLabels[labelIndx]?.color
        return labelColor ? labelColor : "silver"
    }

    return <div className="td-labels brief-item">
        <h3>Labels</h3>
        <div className="brief-data">
            {taskLabels.map((labelId, i) => {
                return <button key={i} style={{ backgroundColor: getLabelColor(labelId) }}>
                    {getLabelTitle(labelId)}
                </button>
            })}
            <button className="transparent-btn-neutral add-btn" onClick={(ev) => cbOpenTaskModal(ev, "taskLabels")} >
                <i className="icon-task-plus"></i>
            </button>
        </div>
    </div>
}
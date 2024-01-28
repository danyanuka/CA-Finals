import { useEffect, useState } from "react";


export function TaskDetailsChecklist({ checklist, task, cbOnUpdateTask}) {

    return <div className="td-section td-checklist">
        <div className="td-section-icon">
            <i className="icon-task-checklist"></i>
        </div>
        <div>
            <h2>Checklist</h2>
            
        </div>
    </div>
}
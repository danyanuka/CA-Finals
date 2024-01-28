import { useEffect, useState } from "react";


export function TaskDetailsActivity({ }) {

    const [isDetailed, setIsDetailed] = useState(false)


    return <div className="td-section td-activity">
        <div className="td-section-icon">
            <i className="icon-task-activity"></i>
        </div>
        <div>
            <h2>Activity</h2>
            <button className="show-details transparent-btn-neutral" onClick={() => setIsDetailed((de) => !de)}>
                {isDetailed ? "Hide Details" : "Show Details"}
            </button>
            <div>
                hhh
            </div>
        </div>
    </div>
}
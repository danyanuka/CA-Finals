import { useState } from "react";

export function TaskDetailsBriefNotify({  }) {

    // TODO - How to toggle currUsers to watch?
    const [isWatching, setIsWatching] = useState(false);

    function toggleIsWatching() {
        // TODO - Need to change in store & Backend
        setIsWatching((prevVal) => !prevVal)
    }

    return <div className="td-notifications brief-item">
        <h3>Notifications</h3>
        <div className="brief-data">
            <button className="transparent-btn-neutral add-btn" onClick={toggleIsWatching} >
                <i className="icon-watch-task"></i>
                <p className="text-watch">{isWatching ? "Watching" : "Watch"}</p>
                {
                    isWatching &&
                    <div className="v-wrapper">
                        <i className="icon-task-check-mark"></i>
                    </div>
                }
            </button>
        </div>
    </div >
}
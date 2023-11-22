import { NavLink } from "react-router-dom"


export function TaskDetails() {
    // const [isCover, setIsCover] = useState(true);  // dummy

    function dummy(ev) {
        console.log("dummy: ", ev)
    }

    return (
        <div className="task-details-wrapper">
            <div className="task-details">
                <i className="icon-close"></i>
                <div className="task-details-cover">
                    botton
                    cover color
                </div>
                <header className="task-details-header">
                    <i className="icon-task-header"></i>
                    <h1>Create backend services</h1>
                    <h2>in list Backlog-Server</h2>
                </header>
                <div className="task-details-main">
                    <div className="task-details-main-data">
                        main
                    </div>
                    <aside className="task-details-main-sidebar">
                        <div className="task-details-main-sidebar-prop">
                            prop
                        </div>
                        <div className="task-details-main-sidebar-actions">
                            actions
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

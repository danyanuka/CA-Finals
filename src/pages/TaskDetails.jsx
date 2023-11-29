import { NavLink } from "react-router-dom"


export function TaskDetails() {
    // const [isCover, setIsCover] = useState(true);  // dummy

    function dummy(ev) {
        console.log("dummy: ", ev)
    }

    console.log("might: ", window.gStore);
    

    return (
        <div className="task-details-wrapper">
            <div className="task-details">
                <button className="transparent-btn-black task-details-icon-close">
                    <i className="icon-close-grayblue"></i>
                </button>
                <div className="task-details-cover">
                    <button className="transparent-btn-black task-details-cover-button">
                        <i className="icon-task-details-cover"></i>
                        &nbsp;Cover
                    </button>
                </div>
                <header className="task-details-header">
                    <i className="icon-task-details-header"></i>
                    <h1>Kickoff meeting</h1>
                    <h2>in list Backlog-Server</h2>
                    <i className="icon-watch-task"></i>
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


export function BoardHeader() {

    return (
        <div className="board-header">


            <div className="board-header-section">
                <div className="board-header-btn board-name" >
                    Testing Trello
                </div>

                <div className="board-header-btn" title="Click to star or unstar this board. Starred boards show up at the top of your boards list" >
                    <i className="icon icon-star"></i>
                </div>

                <div className="board-header-btn" title="Change visibility" >
                    <i className="icon icon-members"></i>
                    Workspace Visible
                </div>

                <div className="board-header-btn board-btn" title="Board" >
                    <i className="icon-board"></i>
                    Board
                </div>

                <div className="board-header-btn" title="Customize views" >
                    <i className="icon icon-show-more"></i>
                </div>

            </div>

            <div className="board-header-section">

                <div className="board-header-btn" title="Power-Ups">
                    <i className="icon icon-power"></i>
                    Power-Ups
                </div>

                <div className="board-header-btn" title="automation" >
                    <i className="icon icon-automation"></i>
                    Automation
                </div>

                <div className="board-header-btn" title="Filter cards" >
                    <i className="icon icon-filter"></i>
                    Filter
                </div>

                <div className="board-header-btn" title="User-Name" >
                    <i className="icon icon-member"></i>
                </div>

                <div className="board-header-btn" title="Share board" >
                    <i className="icon icon-account"></i>
                    Share
                </div>

                <div className="board-header-btn" title="Share board" >
                    <i className="icon icon-said-bar"></i>
                </div>



            </div>


        </div>
    )
}

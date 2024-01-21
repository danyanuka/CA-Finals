import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function BoardHeader() {
    // const [style, setStyle] = useState({})
    const board = useSelector(storeState => storeState.boardModule.curBoard)
    console.log(board?.members);

    // useEffect(() => {
    //     if (board?.style.backgroundColor) {
    //         setStyle({ backgroundColor: `${board?.style.backgroundColor}BF` })
    //     }
    // }, [])

    const style = {
        backgroundColor: board?.style.backgroundColor,
        opacity: 1.5
    }

    return (
        <div className="board-header" style={style}>

            <div className="board-header-section">
                <div className="board-name" >
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
                    Filters
                </div>

                <div className="board-header-btn board-members" title="User-Name" >
                    {/* <i className="icon icon-member"></i> */}

                </div>

                <div className="board-header-btn share-btn" title="Share board" >
                    <i className="icon icon-account"></i>
                    Share
                </div>

                <div className="board-header-btn" title="Share board" >
                    <i className="icon icon-side-bar"></i>
                </div>



            </div>


        </div>
    )
}

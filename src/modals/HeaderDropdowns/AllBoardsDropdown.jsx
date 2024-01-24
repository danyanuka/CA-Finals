import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeModal } from "../../store/actions/app.actions";

export function AllBoardsDropdown({ starred }) {
  const dispatch = useDispatch();
  const boards = useSelector((storeState) => storeState.boardModule.boards);
  const dynBoardsList =
    starred === "starred" ? boards.filter((board) => board.isStarred) : boards;

  console.log(starred);
  return (
    <div className="header-dropdown-container">
      <ul className="dropdown-board-list">
        {dynBoardsList.map((board) => (
          <Link
            key={board.id}
            className="dropdown-li-link"
            onClick={() => dispatch(closeModal())}
            to={`/board/${board._id}`}
          >
            <li className="dropdown-li">
              <div style={board.style} className="dropdown-li-bg-thumb"></div>
              <div className="dropdown-li-text">
                <h3>{board.title}</h3>
                <p>{`${board?.createdBy?.fullname}'s Board`}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

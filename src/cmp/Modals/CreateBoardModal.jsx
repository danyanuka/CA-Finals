import { BackgroundPicker } from "../BackgroundPicker";

export function CreateBoardModal() {
  return (
    <div className="create-board-modal">
      <div className="board-demo-container">
        <div className="bg-board-demo">
          <img
            className="board-demo-img"
            src="imgs/board-demo-img.svg"
            alt=""
          />
        </div>
      </div>
      <div className="background-picker-container">
        <label htmlFor="background-picker">Background</label>
        <BackgroundPicker />
      </div>
    </div>
  );
}

export function CreateLabelModal({ setIsCreateLabelOpen }) {
  return (
    <div className="create-label-modal-container">
      <header className="root-modal-header create-label-header">
        <button
          onClick={() => setIsCreateLabelOpen(false)}
          className="go-back close-modal transparent-btn-black"
        >
          <i className="icon-left-for-modals"></i>
        </button>
        <h2 className="modal-title"> Create label</h2>
      </header>
      <div className="create-label-modal-content">
        <div className="label-display-wrapper">
          <span className=" label-display">dam</span>
        </div>
      </div>
    </div>
  );
}

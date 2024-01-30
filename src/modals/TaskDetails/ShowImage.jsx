
export function ShowImage({ src, setIsShowImage }) {

    function handleClose() {
        setIsShowImage(false)
    }

    return (
        <div className="img-modal-wrapper">
            <div className="img-modal">
                <button onClick={handleClose}><i className="icon-close-modal"></i></button>
                <img src={src} />
            </div>
        </div>

    )
}

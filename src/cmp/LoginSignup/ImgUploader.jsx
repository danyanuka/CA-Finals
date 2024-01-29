import { useState } from 'react'
import { uploadService } from '../../services/upload.service.js'

export function ImgUploader({ onUploaded = null }) {
    const [imgData, setImgData] = useState({
        imgUrl: null,
        height: 500,
        width: 500,
    })

    async function uploadImg(ev) {
        const { secure_url, height, width } = await uploadService.uploadImg(ev)
        setImgData({ imgUrl: secure_url, width, height })
        onUploaded && onUploaded(secure_url)
    }

    function handleCancel() {
        setImgData({ ...imgData, imgUrl: null })
    }

    return (
        <>
            {!imgData.imgUrl &&
                <div className="form-item">
                    <input type="file" onChange={uploadImg} accept="img/*" id="imgUpload" className='attach-input' />
                </div>
            }
            {imgData.imgUrl &&
                <div >
                    <img className="form-item" src={imgData.imgUrl} />
                    <button onClick={handleCancel} className='transparent-btn-black cancel-btn'>Cancel</button>
                </div>

            }
        </>
    )
}
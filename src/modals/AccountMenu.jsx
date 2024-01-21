import { useDispatch, useSelector } from "react-redux"

import { closeModal } from "/src/store/actions/app.actions";
import { useNavigate } from "react-router-dom";

import { utilService } from "../services/util.service";

export function AccountMenu() {
    const user = useSelector(storeState => storeState.userModule.user)
    const userAvatar = utilService.getUserAvatar(user)

    const navigate = useNavigate()
    const dispatch = useDispatch();

    function onClose() {
        dispatch(closeModal());
    }

    function onLogout() {
        onClose()
        navigate('/logout')
    }
    return (

        <div className="account-menu" onBlur={onClose}>
            <h5>ACCOUNT</h5>
            <div className="menu-header user-info">
                {user.imgUrl &&
                    <img className='user-img' src={user?.imgUrl} alt="user-img" title={`${user?.fullname} (${user?.username})`} />
                }

                {!user.imgUrl &&
                    <div className="user-avatar">
                        <h5>{userAvatar.firstLetter} {userAvatar.secondLetter}</h5>
                    </div>
                }
                <div className="username">
                    <p>{user?.fullname}</p>
                    <p>{user?.email}</p>
                </div>
            </div>
            <div className="menu-footer">
                <button onClick={onLogout} >
                    Log out
                </button>
            </div>
        </div>
    )
}

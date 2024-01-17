import { useDispatch, useSelector } from "react-redux"

import { closeModal } from "/src/store/actions/app.actions";
import { logout } from '../store/actions/user.actions.js'


export function AccountMenu() {
    const user = useSelector(storeState => storeState.userModule.user)

    const dispatch = useDispatch();

    function onClose() {
        dispatch(closeModal());
    }

    async function onLogout() {
        try {
            await logout()
        } catch (err) {
            console.log(err);
        }
    }
    return (

        <div className="account-menu" onBlur={onClose}>
            <h3>Account</h3>
            <div className="menu-header">
                <img src={user.imgUrl} alt="user-img" title={`${user.fullname} (${user.username})`} />
                <div className="username">
                    <p>{user.fullname}</p>
                    <p>{user.email}</p>
                </div>
            </div>
            <button onClick={onLogout} className="menu-footer btn">
                Log out
            </button>
        </div>
    )
}

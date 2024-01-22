import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

//Services
import { Header } from "./Header";
import { UserAvatar } from "../UserAvatar";


export function Logout({ onLogout }) {
    const user = useSelector(storeState => storeState.userModule.user)

    function handleLogout(ev = null) {
        if (ev) ev.preventDefault()
        onLogout()
    }


    return (
        <div className="logout-section">

            <form className="lgout-form" >
                <Header title={'Log out of your Atlassian account'} />
                <div className="user-info">

                    <div className="user-avatar">
                        <UserAvatar userFullName={user?.fullname} userImg={user?.imgUrl ? user.imgUrl : "/public/imgs/defaultUserImg.png"} />
                    </div>

                    <div className="username">
                        <h3>{user?.fullname}</h3>
                        <p>{user?.email}</p>
                    </div>
                </div>
                <button onClick={handleLogout} className='form-item btn'>Log out</button>
                <Link className='link' to='/login'>Log in to another account</Link>
            </form>


        </div>
    )
}
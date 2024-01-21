import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

//Services
import { Header } from "./Header";
import { utilService } from '../../services/util.service';

export function Logout({ onLogout }) {
    const user = useSelector(storeState => storeState.userModule.user)
    const userAvatar = utilService.getUserAvatar(user)

    function handleLogout(ev = null) {
        if (ev) ev.preventDefault()
        onLogout()
    }


    return (
        <div className="logout-section">

            <form className="lgout-form" onSubmit={handleLogout}>
                <Header title={'Log out of your Atlassian account'} />
                <div className="user-info">
                    {user.imgUrl &&
                        <img className='user-img' src={user?.imgUrl} alt="user-img" title={`${user?.fullname} (${user?.username})`} />
                    }

                    {!user.imgUrl &&
                        <div className="user-avatar">
                            <h5>{userAvatar.firstLetter} {userAvatar.secondLetter}</h5>
                        </div>
                    }

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
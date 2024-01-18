import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//Services
import { userService } from '../services/user.service'

//Cmp
import { ImgUploader } from '../cmp/ImgUploader'

//Redux
import { loadUsers, login, signup } from '../store/actions/user.actions.js'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export function LoginSignup() {
    const [credentials, setCredentials] = useState(userService.getEmptyUser())
    const [isSignup, setIsSignup] = useState('')

    const users = useSelector(storeState => storeState.userModule.users)
    const [searchParams] = useSearchParams()
    const email = searchParams.get('email')

    const navigate = useNavigate()
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        loadUsers()
        if (pathname === "/signup") {
            setIsSignup('signup')
        }
        if (pathname === "/login") {
            setIsSignup('login')
        }
        if (email) {
            setCredentials({ ...credentials, email })
        }
    }, [])

    function clearState() {
        setCredentials(userService.getEmptyUser())
        setIsSignup(false)
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    async function onLogin(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        try {
            await login(credentials)
            clearState()
            navigate('/board')
        } catch (err) {
            console.log(err);
        }
    }

    async function onSignup(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname | !credentials.email) return
        try {
            await signup(credentials)
            clearState()
            navigate('/board')

        } catch (err) {
            console.log(err);
        }
    }

    function onUploaded(imgUrl) {
        setCredentials(prevCredentials => ({ ...prevCredentials, imgUrl }))
    }

    return (
        <div className="login-signup-page">

            {isSignup === 'login' &&
                <div className="login-section">
                    <div className="header">
                        <div className="title">
                            <i className='icon-logo'></i>
                            <h1>Trello</h1>
                        </div>
                        <h3 className='sub-title'>Log in to continue</h3>
                    </div>
                    <form className="login-form" onSubmit={onLogin}>
                        {/* <select
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                >
                    <option value="">Select User</option>
                    {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
                </select> */}

                        <input
                            className='form-item'

                            type="text"
                            name="username"
                            value={credentials.username}
                            placeholder="Username"
                            onChange={handleChange}
                            required
                            autoFocus
                        />
                        <input
                            className='form-item'

                            type="password"
                            name="password"
                            value={credentials.password}
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />
                        <button className='form-item btn'>Login!</button>
                        <Link className='link' to='/signup'>Create account</Link>

                    </form>
                </div>
            }

            <div className="signup-section">
                {isSignup === 'signup' && <form className="signup-form" onSubmit={onSignup}>
                    <div className="header">
                        <div className="title">
                            <i className='icon-logo'></i>
                            <h1>Trello</h1>
                        </div>
                        <h3 className='sub-title'>sign up to continue</h3>
                    </div>
                    <input
                        className='form-item'
                        type="text"
                        name="fullname"
                        value={credentials.fullname}
                        placeholder="Fullname"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className='form-item'
                        type="text"
                        name="username"
                        value={credentials.username}
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className='form-item'
                        type="email"
                        name="email"
                        value={credentials.email}
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />
                    <input className='form-item'
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <ImgUploader onUploaded={onUploaded} />
                    <button className='form-item btn' >Sign up!</button>

                    <Link className='link' to='/login'>Already have an Atlassian account? Log in</Link>
                </form>}
            </div>
        </div>
    )
}

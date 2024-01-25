import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux';

//Services
// import { userService } from '../../services/user.service.js'

//Cmps
import { Header } from "./Header";

export function Login({ onLogin }) {
    const [credentials, setCredentials] = useState({ username: '', password: '' })
    // const users = useSelector(storeState => storeState.userModule.users)

    function handleLogin(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        onLogin(credentials)
        setCredentials({ username: '', password: '' })
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    return (
        <div className="login-section">
            <Header title={'Log in to continue'} />

            <form className="login-form" onSubmit={handleLogin}>
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
                <button onClick={handleLogin} className='form-item btn'>Login</button>
                <Link className='link' to='/signup'>Create account</Link>

            </form>
        </div>
    )
}
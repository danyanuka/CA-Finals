import { useState } from 'react'
import { Link } from 'react-router-dom'

//Services
import { userService } from '../../services/user.service.js'
import { Header } from "./Header";
import { ImgUploader } from './ImgUploader.jsx'

export function Signup({ onSignup, email }) {
    const [credentials, setCredentials] = useState({ ...userService.getEmptyUser(), email })

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value

        setCredentials({ ...credentials, [field]: value })
    }

    function handleSignup(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname | !credentials.email) return
        onSignup(credentials)
        setCredentials(userService.getEmptyUser())
    }

    function onUploaded(imgUrl) {
        setCredentials(prevCredentials => ({ ...prevCredentials, imgUrl }))
    }

    return (
        <div className="signup-section">

            <form className="signup-form" onSubmit={handleSignup} >
                <Header title={'Sign in to continue'} />
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
                <button onClick={handleSignup} className='form-item btn'>Sign up</button>
            </form>
            <Link className='link' to='/login'>Already have an Atlassian account? Log in</Link>


        </div>
    )
}
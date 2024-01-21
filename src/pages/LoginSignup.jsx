import { useState, useEffect } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

//Services
import { Login } from '../cmp/LoginSignup/Login.jsx'
import { Signup } from '../cmp/LoginSignup/Signup.jsx'
import { Logout } from '../cmp/LoginSignup/Logout.jsx'

//Redux
import { loadUsers, login, signup, logout } from '../store/actions/user.actions.js'


export function LoginSignup() {
    const [path, setPath] = useState('')

    const [searchParams] = useSearchParams()
    const email = searchParams.get('email') || ''

    const navigate = useNavigate()
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        loadUsers()
        if (pathname === "/signup") {
            setPath('signup')
        }
        if (pathname === "/login") {
            setPath('login')
        }
        if (pathname === "/logout") {
            setPath('logout')
        }
    }, [pathname])


    async function onLogin(credentials) {
        try {
            await login(credentials)
            navigate('/board')
        } catch (err) {
            console.log(err);
        }
    }

    async function onSignup(credentials) {
        try {
            await signup(credentials)
            navigate('/board')
        } catch (err) {
            console.log(err);
        }
    }

    async function onLogout() {
        try {
            await logout()
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="login-signup-page">
            <div className="image-left "></div>
            <div className="login-signup-preview">

                {path === 'login' &&
                    <Login onLogin={onLogin} />
                }
                {path === 'signup' &&
                    <Signup onSignup={onSignup} email={email} />
                }
                {path === 'logout' &&
                    <Logout onLogout={onLogout} />
                }
            </div>
            <div className="image-right"></div>
        </div>
    )
}

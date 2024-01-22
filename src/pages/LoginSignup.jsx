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
        // if (pathname === "/signup") {
        //     setPath('signup')
        // }
        // if (pathname === "/login") {
        //     setPath('login')
        // }
        // if (pathname === "/logout") {
        //     setPath('logout')
        // }
    }, [])


    async function onLogin(credentials) {
        try {
            await login(credentials)
            navigate('/board')
        } catch (err) {
            console.log(err);
            alert(err)
        }
    }

    async function onSignup(credentials) {
        console.log('hey');
        try {
            await signup(credentials)
            navigate('/board')
        } catch (err) {
            console.log(err);
            alert(err)
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
            <img className="image-left" src="/public/imgs/bg-login-left.svg" />
            <div className="login-signup-preview">

                {pathname === '/login' &&
                    <Login onLogin={onLogin} />
                }
                {pathname === '/signup' &&
                    <Signup onSignup={onSignup} email={email} />
                }
                {pathname === '/logout' &&
                    <Logout onLogout={onLogout} />
                }
            </div>
            <img className="image-right" src="/public/imgs/bg-login-right.svg" />
        </div>
    )
}

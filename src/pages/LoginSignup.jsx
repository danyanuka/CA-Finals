import { useState, useEffect } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

//Cmp
// import { UserMsg } from "../cmp/UserMsg.jsx"

//Services
import { Login } from '../cmp/LoginSignup/Login.jsx'
import { Signup } from '../cmp/LoginSignup/Signup.jsx'
import { Logout } from '../cmp/LoginSignup/Logout.jsx'
import { showErrorMsg } from '../services/event-bus.service.js'

//Redux
import { loadUsers, login, signup, logout } from '../store/actions/user.actions.js'


export function LoginSignup() {

    const [searchParams] = useSearchParams()
    const email = searchParams.get('email') || ''

    const navigate = useNavigate()
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        loadUsers()
    }, [])

    async function onLogin(credentials) {
        try {
            await login(credentials)
            navigate('/board')
        } catch (err) {
            showErrorMsg(err.response?.data?.err)
            console.log(err);
        }
    }

    async function onSignup(credentials) {
        try {
            await signup(credentials)
            navigate('/board')
        } catch (err) {
            showErrorMsg(err.response?.data?.err)
            console.log(err);
        }
    }

    async function onLogout() {
        try {
            await logout()
            navigate('/')
        } catch (err) {
            showErrorMsg(err.response?.data?.err)
            console.log(err);
        }
    }

    return (
        <div className="login-signup-page">
            <img className="image-left" src="/imgs/bg-login-left.svg" />
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
            <img className="image-right" src="/imgs/bg-login-right.svg" />
        </div>
    )
}

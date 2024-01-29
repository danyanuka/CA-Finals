import Axios from 'axios'

var axios = Axios.create({
    withCredentials: true,
})

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

const BASE_URL =
    process.env.NODE_ENV === 'production'
        ? '/api/'
        : '//localhost:3030/api/'

const BASE_USER_URL = BASE_URL + 'user/'
const BASE_AUTH_URL = BASE_URL + 'auth/'

export const userService = {
    getUsers,
    login,
    signup,
    logout,
    remove,
    update,
    getLoggedinUser,
}


async function getUsers() {
    var { data: users } = await axios.get(BASE_USER_URL)
    return users
}

async function update(userToUpdate) {
    const updatedUser = await axios.put(BASE_USER_URL, userToUpdate)
    if (getLoggedinUser()._id === updatedUser._id) saveLocalUser(updatedUser)
    return updatedUser
}

async function remove(userId) {
    const url = BASE_USER_URL + userId
    var { data: res } = await axios.delete(url)
    return res
}

async function login(credentials) {
    const { data: user } = await axios.post(BASE_AUTH_URL + 'login', credentials)
    if (user) {
        return saveLocalUser(user)
    }
    return null
}

async function signup(credentials) {
    const { data: user } = await axios.post(BASE_AUTH_URL + 'signup', credentials)
    return saveLocalUser(user)
}

async function logout() {
    await axios.post(BASE_AUTH_URL + 'logout')
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}


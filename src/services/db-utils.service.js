
export const STORAGE_KEY_LOGGED_USER = 'loggedInUser' // Added a validation in async-storage so each user can see only his emails.
export const STORAGE_KEY_BOARDS = 'boards'
export const STORAGE_KEY_USERS = 'users'

export function saveToStorage(key, value) {
    localStorage[key] = JSON.stringify(value)
}

export function loadFromStorage(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue
    return JSON.parse(value)
}

import io from 'socket.io-client'
import { userService } from '/src/services/User/user.service'

export const SOCKET_EVENT_BOARD_ADD = 'board-add'
export const SOCKET_EVENT_BOARD_REMOVE = 'board-remove'
export const SOCKET_EVENT_BOARD_UPDATE = 'board-update'

export const SOCKET_EMIT_WATCH_BOARD = 'set-board-socket'
export const SOCKET_EMIT_UNWATCH_BOARD = 'unset-board-socket'

const SOCKET_EMIT_LOGIN = 'set-user-socket'
const SOCKET_EMIT_LOGOUT = 'unset-user-socket'

const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'


export const socketService = createSocketService()

window.socketService = socketService  // for debugging from console

socketService.setup()

function createSocketService() {
    let socket = null
    const socketService = {
        setup() {
            socket = io(baseUrl)
            const user = userService.getLoggedinUser()
            if (user) this.login(user._id)
        },
        on(eventName, cb) {
            socket.on(eventName, cb)
        },
        off(eventName, cb = null) {
            if (!socket) return;
            if (!cb) socket.removeAllListeners(eventName)
            else socket.off(eventName, cb)
        },
        emit(eventName, data) {
            socket.emit(eventName, data)
        },
        login(userId) {
            socket.emit(SOCKET_EMIT_LOGIN, userId)
        },
        logout() {
            socket.emit(SOCKET_EMIT_LOGOUT)
        },
        terminate() {
            socket = null
        },

    }
    return socketService
}

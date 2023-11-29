import {
    STORAGE_KEY_LOGGED_USER,
    STORAGE_KEY_BOARDS,
    STORAGE_KEY_USERS,
    saveToStorage,
    loadFromStorage
} from './db-utils.service.js'


export const dbInitStorageService = {
    createDatabase
}


function createDatabase(overwrite) {
    createUsers(overwrite)
    createBoards(overwrite)
}


function createUsers(overwrite) {
    if (overwrite || !loadFromStorage(STORAGE_KEY_USERS)) {
        const users = [
            {
                "_id": "u101",
                "fullname": "Abi Abambi",
                "username": "abi@ababmi.com",
                "password": "aBambi123",
                "imgUrl": "http://some-img.jpg",
                "mentions": [{ //optional - Watching tasks (for each user)
                    "id": "m101",
                    "boardId": "m101",
                    "taskId": "t101"
                }]
            },
            {
                "_id": "u202",
                "fullname": "daby",
                "username": "daby@ababmi.com",
                "password": "aBambi123",
                "imgUrl": "http://some-img.jpg",
                "mentions": [{ //optional - Watching tasks (for each user)
                    "id": "m101",
                    "boardId": "m101",
                    "taskId": "t101"
                }]
            }
        ]
        saveToStorage(STORAGE_KEY_USERS, users)
    }
}

function createBoards(overwrite) {
    if (overwrite || !loadFromStorage(STORAGE_KEY_BOARDS)) {
        const boards = [
            {
                "_id": "b1",
                "title": "Robot dev proj",
                "isStarred": false,
                "archivedAt": 1589983468418,
                "createdBy": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "style": {
                    "backgroundImage": ""
                },
                "labels": [
                    {
                        "id": "l101",
                        "title": "Done",
                        "color": "#61bd4f"
                    },
                    {
                        "id": "l102",
                        "title": "Progress",
                        "color": "#61bd33"
                    }
                ],
                "members": [
                    {
                        "_id": "u101",
                        "fullname": "Tal Tarablus",
                        "imgUrl": "https://www.google.com"
                    }
                ],
                "groups": [
                    {
                        "id": "g101",
                        "title": "Group 1",
                        "archivedAt": 1589983468418,
                        "tasks": [
                            {
                                "id": "c101",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c102",
                                "title": "Add Samples"
                            }
                        ],
                        "style": {}
                    },
                    {
                        "id": "g102",
                        "title": "Group 2",
                        "tasks": [
                            {
                                "id": "c103",
                                "title": "Do that",
                                "archivedAt": 1589983468418
                            },
                            {
                                "id": "c104",
                                "title": "Help me",
                                "status": "in-progress",
                                "priority": "high",
                                "description": "description",
                                "comments": [
                                    {
                                        "id": "ZdPnm",
                                        "txt": "also @yaronb please CR this",
                                        "createdAt": 1590999817436,
                                        "byMember": {
                                            "_id": "u101",
                                            "fullname": "Tal Tarablus",
                                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                        }
                                    }
                                ],
                                "checklists": [
                                    {
                                        "id": "YEhmF",
                                        "title": "Checklist",
                                        "todos": [
                                            {
                                                "id": "212jX",
                                                "title": "To Do 1",
                                                "isDone": false
                                            }
                                        ]
                                    }
                                ],
                                "memberIds": [
                                    "u101"
                                ],
                                "labelIds": [
                                    "l101",
                                    "l102"
                                ],
                                "dueDate": 16156215211,
                                "byMember": {
                                    "_id": "u101",
                                    "username": "Tal",
                                    "fullname": "Tal Tarablus",
                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                },
                                "style": {
                                    "backgroundColor": "#26de81"
                                }
                            }
                        ],
                        "style": {}
                    }
                ],
                "activities": [
                    {
                        "id": "a101",
                        "txt": "Changed Color",
                        "createdAt": 154514,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Abi Abambi",
                            "imgUrl": "http://some-img"
                        },
                        "group": {
                            "id": "g101",
                            "title": "Urgent Stuff"
                        },
                        "task": {
                            "id": "c101",
                            "title": "Replace Logo"
                        }
                    }
                ]
            },
            {
                "_id": "b2",
                "title": "Robot dev proj",
                "isStarred": false,
                "archivedAt": 1589983468418,
                "createdBy": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "style": {
                    "backgroundImage": ""
                },
                "labels": [
                    {
                        "id": "l101",
                        "title": "Done",
                        "color": "#61bd4f"
                    },
                    {
                        "id": "l102",
                        "title": "Progress",
                        "color": "#61bd33"
                    }
                ],
                "members": [
                    {
                        "_id": "u101",
                        "fullname": "Tal Tarablus",
                        "imgUrl": "https://www.google.com"
                    }
                ],
                "groups": [
                    {
                        "id": "g101",
                        "title": "Group 1",
                        "archivedAt": 1589983468418,
                        "tasks": [
                            {
                                "id": "c101",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c102",
                                "title": "Add Samples"
                            }
                        ],
                        "style": {}
                    },
                    {
                        "id": "g102",
                        "title": "Group 2",
                        "tasks": [
                            {
                                "id": "c103",
                                "title": "Do that",
                                "archivedAt": 1589983468418
                            },
                            {
                                "id": "c104",
                                "title": "Help me",
                                "status": "in-progress",
                                "priority": "high",
                                "description": "description",
                                "comments": [
                                    {
                                        "id": "ZdPnm",
                                        "txt": "also @yaronb please CR this",
                                        "createdAt": 1590999817436,
                                        "byMember": {
                                            "_id": "u101",
                                            "fullname": "Tal Tarablus",
                                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                        }
                                    }
                                ],
                                "checklists": [
                                    {
                                        "id": "YEhmF",
                                        "title": "Checklist",
                                        "todos": [
                                            {
                                                "id": "212jX",
                                                "title": "To Do 1",
                                                "isDone": false
                                            }
                                        ]
                                    }
                                ],
                                "memberIds": [
                                    "u101"
                                ],
                                "labelIds": [
                                    "l101",
                                    "l102"
                                ],
                                "dueDate": 16156215211,
                                "byMember": {
                                    "_id": "u101",
                                    "username": "Tal",
                                    "fullname": "Tal Tarablus",
                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                },
                                "style": {
                                    "backgroundColor": "#26de81"
                                }
                            }
                        ],
                        "style": {}
                    }
                ],
                "activities": [
                    {
                        "id": "b1",
                        "txt": "Changed Color",
                        "createdAt": 154514,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Abi Abambi",
                            "imgUrl": "http://some-img"
                        },
                        "group": {
                            "id": "g101",
                            "title": "Urgent Stuff"
                        },
                        "task": {
                            "id": "c101",
                            "title": "Replace Logo"
                        }
                    }
                ]
            }
        ]
        saveToStorage(STORAGE_KEY_BOARDS, boards)
    }
}

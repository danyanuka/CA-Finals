import {
  STORAGE_KEY_LOGGED_USER,
  STORAGE_KEY_BOARDS,
  STORAGE_KEY_USERS,
  saveToStorage,
  loadFromStorage,
} from "./db-utils.service.js";

export const dbInitStorageService = {
  createDatabase,
};

function createDatabase(overwrite) {
  createUsers(overwrite);
  createBoards(overwrite);
}

function createUsers(overwrite) {
  if (overwrite || !loadFromStorage(STORAGE_KEY_USERS)) {
    const users = [
      {
        _id: "u101",
        fullname: "Abi Abambi",
        username: "abi@ababmi.com",
        password: "aBambi123",
        imgUrl:
          "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
        mentions: [
          {
            //optional - Watching tasks (for each user)
            id: "m101",
            boardId: "m101",
            taskId: "t101",
          },
        ],
      },
      {
        _id: "u105",
        fullname: "Hodaya Abu",
        username: "hodaya@.com",
        password: "hodaya123",
        mentions: [
          {
            //optional - Watching tasks (for each user)
            id: "m101",
            boardId: "m101",
            taskId: "t101",
          },
        ],
      },
      {
        _id: "u202",
        fullname: "daby",
        username: "daby@ababmi.com",
        password: "aBambi123",
        mentions: [
          {
            //optional - Watching tasks (for each user)
            id: "m101",
            boardId: "m101",
            taskId: "t101",
          },
        ],
      },
    ];
    saveToStorage(STORAGE_KEY_USERS, users);
  }
}

function createBoards(overwrite) {
  if (overwrite || !loadFromStorage(STORAGE_KEY_BOARDS)) {
    const boards = [
      {
        _id: "b101",
        title: "Robot dev proj",
        isStarred: false,
        archivedAt: 1589983468418,
        createdBy: {
          _id: "u101",
          fullname: "Abi Abambi",
          imgUrl: "http://some-img",
        },
        style: {
          backgroundImage:
            "url(https://images.unsplash.com/photo-1629388684419-9001049809be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4MDB8MHwxfGNvbGxlY3Rpb258NXwyNTk1NDgzfHx8fHwyfHwxNzA2MDE1NjI5fA&ixlib=rb-4.0.3&q=80&w=1080)",
        },
        labels: [
          {
            id: "l101",
            title: "Done",
            color: "green",
          },
          {
            id: "l102",
            title: "Progress",
            color: "red",
          },
        ],
        members: [
          {
            _id: "u101",
            fullname: "Tal Tarablus",
            imgUrl:
              "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
          },
          {
            _id: "uk5",
            fullname: "hey harablus",
            imgUrl: "https://www.google.com",
          },
          {
            _id: "uk7",
            fullname: "bee barablus",
            imgUrl: "https://www.google.com",
          },
        ],
        groups: [
          {
            id: "g101",
            title: "grpTeam",
            archivedAt: 1589983468418,
            tasks: [
              {
                id: "c101",
                title: "Replace logo",
                startDate: 16156200000,
                dueDate: 1705416898828,
              },
              {
                id: "c102",
                title: "Add Samples",
                startDate: 16156200000,
                dueDate: 1705416898827,
              },
            ],
            style: {},
          },
          {
            id: "g102",
            title: "grpHey",
            tasks: [
              {
                id: "c103",
                title: "Do that",
                archivedAt: 1589983468418,
                startDate: 16156200000,
                dueDate: 1705416898826,
              },
              {
                id: "c104",
                title: "Help me",
                isDone: true,
                description: null,
                comments: [
                  {
                    id: "ZdPnm",
                    txt: "also @yaronb please CR this",
                    createdAt: 1590999817436,
                    byMember: {
                      _id: "u101",
                      fullname: "Tal Tarablus",
                      imgUrl:
                        "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                    },
                  },
                ],
                checklists: [
                  {
                    id: "YEhmF",
                    title: "Checklist",
                    todos: [
                      {
                        id: "212jX",
                        title: "To Do 1",
                        isDone: false,
                      },
                    ],
                  },
                ],
                memberIds: ["u101"],
                labelIds: ["l101", "l102"],
                startDate: 16156200000,
                dueDate: 16156215211,
                byMember: {
                  _id: "u101",
                  username: "Tal",
                  fullname: "Tal Tarablus",
                  imgUrl:
                    "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                },
                style: {
                  backgroundColor: "#26de81",
                },
              },
            ],
            style: {},
          },
        ],
        activities: [
          {
            id: "a101",
            txt: "Changed Color",
            createdAt: 154514,
            byMember: {
              _id: "u101",
              fullname: "Abi Abambi",
              imgUrl: "http://some-img",
            },
            group: {
              id: "g101",
              title: "Urgent Stuff",
            },
            task: {
              id: "c101",
              title: "Replace Logo",
            },
          },
        ],
      },
      {
        _id: "b1",
        title: "Robot dev proj",
        isStarred: false,
        archivedAt: 1589983468418,
        createdBy: {
          _id: "u101",
          fullname: "Abi Abambi",
          imgUrl:
            "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
        },
        style: {
          backgroundImage: "url(/grad-bg-images/brown.svg)",
        },
        labels: [
          {
            id: "l101",
            title: "Done",
            color: "black",
          },
          {
            id: "l102",
            title: "Progress",
            color: "sky",
          },
        ],
        members: [
          {
            _id: "u101",
            fullname: "Tal Tarablus",
            imgUrl:
              "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
          },
        ],
        groups: [
          {
            id: "g101",
            title: "Group 1",
            archivedAt: 1589983468418,
            tasks: [
              {
                id: "c101",
                title: "Replace logo",
              },
              {
                id: "c102",
                title: "Add Samples",
              },
            ],
            style: {},
          },
          {
            id: "g102",
            title: "Group 2",
            tasks: [
              {
                id: "c103",
                title: "Do that",
                archivedAt: 1589983468418,
                dueDate: 1705855855905,
              },
              {
                id: "c1015",
                title: "Add Filter",
                archivedAt: 1589983468418,
                dueDate: 1705860793070,
              },
              {
                id: "c104",
                title: "Help me",
                status: "in-progress",
                priority: "high",
                description: null,
                comments: [
                  {
                    id: "ZdPnm",
                    txt: "also @yaronb please CR this",
                    createdAt: 1590999817436,
                    byMember: {
                      _id: "u101",
                      fullname: "Abi Abambi",
                      imgUrl:
                        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
                    },
                  },
                ],
                checklists: [
                  {
                    id: "YEhmF",
                    title: "Checklist",
                    todos: [
                      {
                        id: "212jX",
                        title: "To Do 1",
                        isDone: false,
                      },
                      {
                        id: "212jX",
                        title: "To Do 2",
                        isDone: false,
                      },
                      {
                        id: "212jX",
                        title: "To Do 3",
                        isDone: true,
                      },
                    ],
                  },
                ],
                memberIds: ["u101"],
                labelIds: ["l101", "l102"],
                dueDate: 1705947281491,
                byMember: {
                  _id: "u101",
                  fullname: "Abi Abambi",
                  imgUrl:
                    "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
                },
                style: {
                  backgroundColor: "#26de81",
                },
              },
            ],
            style: {},
          },
        ],
        activities: [
          {
            id: "a101",
            txt: "Changed Color",
            createdAt: 154514,
            byMember: {
              _id: "u101",
              fullname: "Abi Abambi",
              imgUrl: "http://some-img",
            },
            group: {
              id: "g101",
              title: "Urgent Stuff",
            },
            task: {
              id: "c101",
              title: "Replace Logo",
            },
          },
        ],
      },
      {
        _id: "b2",
        title: "Robot dev proj",
        isStarred: false,
        archivedAt: 1589983468418,
        createdBy: {
          _id: "u101",
          fullname: "Abi Abambi",
          imgUrl: "http://some-img",
        },
        style: {
          backgroundImage: "url(/grad-bg-images/turquoise.svg)",
        },
        labels: [
          {
            id: "l101",
            title: "Done",
            color: "red-subtle",
          },
          {
            id: "l102",
            title: "Progress",
            color: "yellow",
          },
        ],
        members: [
          {
            _id: "u101",
            fullname: "Tal Tarablus",
            imgUrl:
              "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
          },
        ],
        groups: [
          {
            id: "g101",
            title: "Group 1",
            archivedAt: 1589983468418,
            tasks: [
              {
                id: "c101",
                title: "Replace logo",
              },
              {
                id: "c102",
                title: "Add Samples",
              },
            ],
            style: {},
          },
          {
            id: "g102",
            title: "Group 2",
            tasks: [
              {
                id: "c103",
                title: "Do that",
                archivedAt: 1589983468418,
                checklists: [
                  {
                    id: "YEhmF",
                    title: "Checklist",
                    todos: [
                      {
                        id: "212jX",
                        title: "To Do 1",
                        isDone: true,
                      },
                      {
                        id: "212jX",
                        title: "To Do 2",
                        isDone: true,
                      },
                      {
                        id: "212jX",
                        title: "To Do 3",
                        isDone: true,
                      },
                    ],
                  },
                ],
              },
              {
                id: "c104",
                title: "Help me",
                isDone: true,
                description: null,
                comments: [
                  {
                    id: "ZdPnm",
                    txt: "also @yaronb please CR this",
                    createdAt: 1590999817436,
                    byMember: {
                      _id: "u101",
                      fullname: "Tal Tarablus",
                      imgUrl:
                        "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                    },
                  },
                ],
                checklists: [
                  {
                    id: "YEhmF",
                    title: "Checklist",
                    todos: [
                      {
                        id: "212jX",
                        title: "To Do 1",
                        isDone: true,
                      },
                      {
                        id: "212jX",
                        title: "To Do 2",
                        isDone: false,
                      },
                      {
                        id: "212jX",
                        title: "To Do 3",
                        isDone: false,
                      },
                    ],
                  },
                ],
                memberIds: ["u101"],
                labelIds: ["l101", "l102"],
                dueDate: 16156215211,
                byMember: {
                  _id: "u101",
                  username: "Tal",
                  fullname: "Tal Tarablus",
                  imgUrl:
                    "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg",
                },
                style: {
                  backgroundColor: "#26de81",
                },
              },
            ],
            style: {},
          },
        ],
        activities: [
          {
            id: "b1",
            txt: "Changed Color",
            createdAt: 154514,
            byMember: {
              _id: "u101",
              fullname: "Abi Abambi",
              imgUrl: "http://some-img",
            },
            group: {
              id: "g101",
              title: "Urgent Stuff",
            },
            task: {
              id: "c101",
              title: "Replace Logo",
            },
          },
        ],
      },
    ];
    saveToStorage(STORAGE_KEY_BOARDS, boards);
  }
}

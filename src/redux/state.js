let state = {
    dialogs: [
        {
            id: 1,
            user: [
                {
                    id: 1,
                    online: true,
                    img: 'https://images.unsplash.com/photo-1610824587411-dfcc85fea47a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    name: 'Sarah Jonis',
                },
            ],
            messages: [
                {
                    with: true,
                    time: '10:31',
                    text: 'Hi! How are you?'
                },
                {
                    with: true,
                    time: '10:32',
                    text: 'Are we going for a walk today?'
                },
                {
                    with: false,
                    time: '10:47',
                    text: 'Hi baby! Of course, let\'s go... I\'ll call you at 6:00 p.m.'
                },
                {
                    with: true,
                    time: '11:03',
                    text: 'Ooh, I\'m very happy! By evening..'
                },
            ]
        },
        {
            id: 2,
            user: [
                {
                    id: 2,
                    online: true,
                    img: 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwbWVuJTIwZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    name: 'David Hellhake',
                },
            ],
            messages: [
                {
                    with: true,
                    time: '8:55',
                    text: 'Cool, bro!'
                },
                {
                    with: true,
                    time: '8:55',
                    text: 'See you tomorrow. I\'ll pick up the tool...'
                },
                {
                    with: false,
                    time: '9:05',
                    text: 'Ok bro, I\'m waiting'
                },
            ]
        },
        {
            id: 3,
            user: [
                {
                    id: 3,
                    online: false,
                    img: 'https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGdpcmwlMjBmYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    name: 'Dana Elash'
                },
            ],
            messages: [
                {
                    with: true,
                    time: '17:55',
                    text: 'Hi, bro!'
                },
                {
                    with: true,
                    time: '17:57',
                    text: 'The design of this page is ready, you can start development...'
                },
                {
                    with: false,
                    time: '18:01',
                    text: 'Ok, Dana. I\'m starting'
                },
                {
                    with: true,
                    time: '18:17',
                    text: 'Thanks)))'
                },
            ]
        },
        {
            id: 4,
            user: [
                {
                    id: 4,
                    online: false,
                    img: 'https://images.unsplash.com/photo-1610271340738-726e199f0258?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGdpcmwlMjBmYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    name: 'Hailey Sembrat'
                },
            ],
            messages: [
                {
                    with: false,
                    time: '9:05',
                    text: 'See you tomorrow.'
                },
                {
                    with: true,
                    time: '9:33',
                    text: 'Cool, bro! I\'m ready. Don\'t forget to take that backpack with clothes.'
                },
                {
                    with: false,
                    time: '9:45',
                    text: 'Okay'
                },
            ]
        },
        {
            id: 5,
            user: [
                {
                    id: 5,
                    online: true,
                    img: 'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGdpcmx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    name: 'Kristina Pellegrini'
                },
            ],
            messages: [
                {
                    with: false,
                    time: '10:22',
                    text: 'Hello! On Saturday we will go to the beach. You with us?'
                },
                {
                    with: true,
                    time: '10:48',
                    text: 'Oooh, Andrew hello! Yes, I would like to))) At what time?'
                },
                {
                    with: true,
                    time: '11:01',
                    text: 'Samantha also wants to leave...'
                },
                {
                    with: false,
                    time: '11:12',
                    text: 'Ok, take Samantha. We meet in the parking lot near the tower, at 7:00 am. Tom will take us by car.'
                },
                {
                    with: true,
                    time: '11:15',
                    text: 'Thanks, until Saturday'
                },
            ]
        },
    ],
    users: [
        {
            id: 1,
            online: true,
            img: 'https://images.unsplash.com/photo-1610824587411-dfcc85fea47a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            name: 'Sarah Jonis',
        },
        {
            id: 2,
            online: true,
            img: 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwbWVuJTIwZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            name: 'David Hellhake',
        },
        {
            id: 3,
            online: false,
            img: 'https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGdpcmwlMjBmYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            name: 'Dana Elash'
        },
        {
            id: 4,
            online: false,
            img: 'https://images.unsplash.com/photo-1610271340738-726e199f0258?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGdpcmwlMjBmYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            name: 'Hailey Sembrat'
        },
        {
            id: 5,
            online: true,
            img: 'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGdpcmx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            name: 'Kristina Pellegrini'
        },
    ],
    auth: [
        {
            name: 'Andrew Petryk',
        },
    ]
}

export default state;
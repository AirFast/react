let store = {
    _state: {
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
                        text: 'Ooh, I\'m very happy! By evening...'
                    },
                ],
                stateMessage: '',
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
                ],
                stateMessage: '',
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
                ],
                stateMessage: '',
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
                ],
                stateMessage: '',
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
                ],
                stateMessage: '',
            },
            {
                id: 6,
                user: [
                    {
                        id: 5,
                        online: false,
                        img: 'https://images.unsplash.com/photo-1614595198554-9e8ef1c50171?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjF8fGdpcmwlMjBmYWNlfGVufDB8fDJ8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        name: 'Diana Simumpande'
                    },
                ],
                messages: [
                    {
                        with: true,
                        time: '10:22',
                        text: 'Hello!'
                    },
                ],
                stateMessage: '',
            },
            {
                id: 7,
                user: [
                    {
                        id: 5,
                        online: false,
                        img: 'https://images.unsplash.com/photo-1614435763665-faf28450accc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTR8fGdpcmwlMjBmYWNlfGVufDB8fDJ8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        name: 'Helena Lopes'
                    },
                ],
                messages: [
                    {
                        with: true,
                        time: '10:22',
                        text: 'Hello!'
                    },
                ],
                stateMessage: '',
            },
            {
                id: 8,
                user: [
                    {
                        id: 5,
                        online: true,
                        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        name: 'Joseph Gonzalez'
                    },
                ],
                messages: [
                    {
                        with: true,
                        time: '10:22',
                        text: 'Hello!'
                    },
                ],
                stateMessage: '',
            },
            {
                id: 9,
                user: [
                    {
                        id: 5,
                        online: true,
                        img: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1lbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
                        name: 'Ben White'
                    },
                ],
                messages: [
                    {
                        with: true,
                        time: '10:22',
                        text: 'Hello!'
                    },
                ],
                stateMessage: '',
            },
            {
                id: 10,
                user: [
                    {
                        id: 5,
                        online: false,
                        img: 'https://images.unsplash.com/photo-1614153500026-7ba3867c3127?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjI1fHxnaXJsJTIwZmFjZXxlbnwwfHwyfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        name: 'Simona Sergi'
                    },
                ],
                messages: [
                    {
                        with: true,
                        time: '10:22',
                        text: 'Hello!'
                    },
                ],
                stateMessage: '',
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
    },

    _subscriber: function () {
        console.log('No subscribers...');
    },

    getState: function () {
        return this._state;
    },

    dispatch: function (action) { // { type: name }

        if (action.type === 'CHANGE-MESSAGE') {

            this.getState().dialogs[action.dialogId - 1].stateMessage = action.message;
            this._subscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') {

            if (this.getState().dialogs[action.dialogId - 1].stateMessage.length) {
                let today = new Date(),
                    hours = today.getHours() >= 10 ? today.getHours() : '0' + today.getHours(),
                    minutes = today.getMinutes() >= 10 ? today.getMinutes() : '0' + today.getMinutes();

                let time = hours + ':' + minutes;

                let newMessage = {
                    with: false,
                    time: time,
                    text: this.getState().dialogs[action.dialogId - 1].stateMessage
                }
                this.getState().dialogs[action.dialogId - 1].messages.push(newMessage);
                this._subscriber(this._state);

            }

        }

    },

    changeMessage: function (dialogId, message) {
        this.getState().dialogs[dialogId - 1].stateMessage = message;
        this._subscriber(this._state);
    },

    addMessage: function (dialogId) {
        if (this.getState().dialogs[dialogId - 1].stateMessage.length) {
            let today = new Date(),
                hours = today.getHours() >= 10 ? today.getHours() : '0' + today.getHours(),
                minutes = today.getMinutes() >= 10 ? today.getMinutes() : '0' + today.getMinutes();

            let time = hours + ':' + minutes;

            let newMessage = {
                with: false,
                time: time,
                text: this.getState().dialogs[dialogId - 1].stateMessage
            }
            this.getState().dialogs[dialogId - 1].messages.push(newMessage);
            this._subscriber(this._state);
        }
    },

    subscribe: function (options) {
        this._subscriber = options;
    }
}

export default store;
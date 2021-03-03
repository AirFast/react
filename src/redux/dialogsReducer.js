const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE:
            state[action.id - 1].stateMessage = action.message;
            return state;
        case ADD_MESSAGE:
            if (state[action.id - 1].stateMessage.length) {
                let today = new Date(),
                    hours = today.getHours() >= 10 ? today.getHours() : '0' + today.getHours(),
                    minutes = today.getMinutes() >= 10 ? today.getMinutes() : '0' + today.getMinutes();

                let time = hours + ':' + minutes;

                let newMessage = {
                    with: false,
                    time: time,
                    text: state[action.id - 1].stateMessage
                }
                state[action.id - 1].messages.push(newMessage);
                state[action.id - 1].stateMessage = '';
            }

            return state;
        default:
            return state;
    }
}

export const changeMessageActionCreator = (id, message) => ({type: CHANGE_MESSAGE, id: id, message: message});
export const addMessageActionCreator = (id) => ({type: ADD_MESSAGE, id: id});

export default dialogsReducer;
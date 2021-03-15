const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_DIALOGS = 'SET-DIALOGS';

let initState = [];

const dialogs = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE:
            return [
                ...state.map(d => {
                    if (d.id === action.id) {
                        return {...d, stateMessage: action.message};
                    }
                    return d;
                })
            ];
        case ADD_MESSAGE:
            return [
                ...state.map((d, index) => {
                    if (d.id === action.id) {
                        let today = new Date(),
                            hours = today.getHours() >= 10 ? today.getHours() : '0' + today.getHours(),
                            minutes = today.getMinutes() >= 10 ? today.getMinutes() : '0' + today.getMinutes();
                        let time = hours + ':' + minutes;
                        return {
                            ...d,
                            messages: [
                                ...state[index].messages, {
                                    with: false,
                                    time: time,
                                    text: state[index].stateMessage
                                }
                            ],
                            stateMessage: ''
                        };
                    }
                    return d;
                })
            ];
        case SET_DIALOGS:
            return [
                ...state,
                ...Object.keys(action.dialogs).map(dialogKey => {
                        return {
                            ...action.dialogs[dialogKey],
                            id: dialogKey,
                            messages: [
                                ...Object.keys(action.dialogs[dialogKey].messages).map(messageKey => {
                                    return {
                                        ...action.dialogs[dialogKey].messages[messageKey],
                                        id: messageKey,
                                    }
                                })
                            ]
                        }
                    }
                ),
            ];
        default:
            return state;
    }
}

export const changeMessage = (id, message) => {
    return (dispatch, getState) => {
        dispatch({type: CHANGE_MESSAGE, id, message});
    }
}

export const addMessage = id => {
    return (dispatch, getState) => {
        dispatch({type: ADD_MESSAGE, id});
    }
}

export const setDialogs = dialogs => {
    return (dispatch, getState) => {
        dispatch({type: SET_DIALOGS, dialogs});
    }
}

export default dialogs;
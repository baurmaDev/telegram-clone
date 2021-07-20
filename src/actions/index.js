import jsonPlaceholder from '../apis/jsonPlaceholder';
import messages from '../apis/messages';

export const fetchMessage = () => {
    return async function(dispatch){
        const response = await jsonPlaceholder.get('/comments')
        
        dispatch({
            type: 'FETCH_MESSAGES',
            payload: response.data
        })
    };
}

export const selectedMessage = message => {
    return {
        type: 'SELECTED_MESSAGE',
        payload: message
    };
}

export const createMessage = (formValues) => {
    return async (dispatch) => {
       const response = await messages.post('/messages', formValues);

       dispatch({
           type: 'CREATE_MESSAGE',
           payload: response.data
       });
    };

}
export const fetchMyMessages = () => async dispatch => {
    const response = await messages.get('/messages');

    dispatch({
        type: 'FETCH_MYMESSAGES',
        payload: response.data
    });
}
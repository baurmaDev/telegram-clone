import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchMessage = () => {
    return async function(dispatch){
        const response = await jsonPlaceholder.get('/comments')
        
        dispatch({
            type: 'FETCH_MESSAGES',
            payload: response.data
        })
    };
}
export const fetchUser = () => {
    return async function(dispatch){
        const response = await jsonPlaceholder.get('/users')

        dispatch({
            type: 'FETCH_USERS',
            payload: response.data
        })
    };
}
export const selectedMessage = message => {
    return {
        type: 'SELECTED_MESSAGE',
        payload: message
    }
}
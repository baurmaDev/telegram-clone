import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import selectedMessage from './selectedMessage';
import userReducer from './userReducer';

import { reducer as formMessage} from 'redux-form'

export default combineReducers({
    messages: messageReducer,
    users: userReducer,
    selectedMessage: selectedMessage,
    form: formMessage 
});
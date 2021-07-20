import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import selectedMessage from './selectedMessage';


import { reducer as formMessage} from 'redux-form'
import myMessagesReducer from './myMessagesReducer';

export default combineReducers({
    messages: messageReducer,
    selectedMessage: selectedMessage,
    myMessages: myMessagesReducer,
    form: formMessage,
    
});
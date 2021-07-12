export default(state=[],action) => {
    switch(action.type){
        case 'SELECTED_MESSAGE':
            return action.payload;
        default:
            return state;
    }
}
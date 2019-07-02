import { combineReducers} from 'redux';

const dummy = (action) => {
    console.log(action);
    // if (action.type === "FETCH_POSTS") {
    //     return { posts: ['lol']}
    // }

    return 'dummy data';
};

export default combineReducers({
    dummy
});
import {configureStore} from '@reduxjs/toolkit';

import carReducer from './slices/car.slice';
import userReducer from "./slices/user.slice";
import postReducer from "./slices/post.slice";
import commentReducer from './slices/comment.slice';

const store = configureStore({
    reducer: {
        carReducer,
        userReducer,
        postReducer,
        commentReducer
    }
})

export default store;
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {usersService} from '../../services';

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await usersService.getAll();
            return users;

        }catch (e){
            return rejectWithValue(e.message);

        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',

    initialState: {
        users: [],
        status: null,
        error: null
    },

    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },

        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;

        },

        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const userReducer = userSlice.reducer;

export default userReducer;
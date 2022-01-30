import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {carService} from '../../services';

//                                  GET ALL
export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars;

        } catch (e) {
            return rejectWithValue(e.message);

        }
    }
)

//                                      CREATE
export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {rejectWithValue, dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({newCar}));

        } catch (e) {
            return rejectWithValue(e.message);

        }
    }
);

                //          DELETE
export const removeCar = createAsyncThunk(
    'carSlice/removeCar',
    async ({id}, {dispatch, rejectedWithValue}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}));

        } catch (e) {
            return rejectedWithValue(e.message);
        }
    }
);

//                                        UPDATE
export const updateCar = createAsyncThunk(
    'carSlice/updateCar',

    async ({id, data}, {dispatch, rejectedWithValue}) => {
        try {
            const updatedCar = await carService.updateById(id, data);
            dispatch(rebootCars({updatedCar}));

        } catch (e) {
            return rejectedWithValue(e.message);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',

    initialState: {
        cars: [],
        selectedCar: {},
        updatedCar: null,
        status: null,
        error: null
    },

    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.newCar)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        selectForUpdate: (state, action) => {
            state.selectedCar = action.payload.car;

        },
        rebootCars: (state, action) => {
            state.updatedCar = action.payload.updatedCar;
        }

    },

    extraReducers: {
        // GET
        [getAllCars.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },

        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;
        },

        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        // CREATE
        [createCar.pending]: (state, action) => {
            state.status = 'creating';
            state.error = null;
        },

        [createCar.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
        },

        [createCar.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        // DELETE
        [removeCar.pending]: (state, action) => {
            state.status = 'removing';
            state.error = null;
        },

        [removeCar.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
        },

        [removeCar.rejected]: (state, action) => {
            state.status = 'removeError';
            state.error = action.payload;
        },

        //UPDATE
        [updateCar.pending]: (state, action) => {
            state.status = 'updating';
            state.error = null;
        },

        [updateCar.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
        },

        [updateCar.rejected]: (state, action) => {
            state.status = 'updateError';
            state.error = action.payload;
        }
    }
})

const carReducer = carSlice.reducer;

export const {addCar, deleteCar, selectForUpdate, rebootCars} = carSlice.actions;

export default carReducer;
import {configureStore, createSlice, ThunkAction} from '@reduxjs/toolkit';
import {Action} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';

export const subjectSlice = createSlice({
    name: 'subject',

    initialState: {},

    reducers: {
        setEnt(state, action) {
            return action.payload;
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', state, action.payload);
            return {
                ...state,
                ...action.payload.subject,
            };
        },
    },
});

const makeStore = () =>
    configureStore({
        reducer: {
            [subjectSlice.name]: subjectSlice.reducer,
        },
        devTools: true,
    });

export const fetchSubject = (id) => async dispatch => {
    const timeoutPromise = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));

    await timeoutPromise(200);

    dispatch(
        subjectSlice.actions.setEnt({
            [id]: {
                id,
                name: `Subject ${id}`,
            },
        }),
    );
};

export const wrapper = createWrapper(makeStore);

export const selectSubject = (id) => (state) => state?.[subjectSlice.name]?.[id];

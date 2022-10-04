import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    eventName: '',
    hostName: '',
    startTime: '',
    endTime: '',
};

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.eventName = action.payload.eventName;
            state.hostName = action.payload.hostName;
            state.startTime = action.payload.startTime;
            state.endTime = action.payload.endTime;
        },
    },
});

export default eventSlice.reducer;
export const { addEvent } = eventSlice.actions;

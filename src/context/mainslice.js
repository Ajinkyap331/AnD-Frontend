import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
      catalog : []
    },
    reducers: {
        setCatalog(state, action) {
            state.catalog = action.payload
        }
    }
});

export const mainActions = mainSlice.actions;
export default mainSlice;

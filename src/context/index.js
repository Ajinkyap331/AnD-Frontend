import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainslice";


const store = configureStore({
    reducer: {
        main: mainSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store
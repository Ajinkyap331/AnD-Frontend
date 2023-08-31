import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        catalog: []
    },
    reducers: {
        addCatalog(state, action) {
            state.catalog.push(action.payload)
        },
        deleteCatalog(state, action) {
            state.catalog = state.catalog.filter((e, i) => { return i !== action.payload })
        },
        setRatings(state, action) {
            state.catalog[action.payload.index].rating.push(action.payload.rating)
        },
        deleteRating(state, action) {
            state.catalog[action.payload.index].rating = state.catalog[action.payload.index].rating.filter((e, i) => { return i !== action.payload.rating_index })
        },
        setCompanies(state, action) {
            state.catalog[action.payload.index].rating[action.payload.rating_index].companies.push(action.payload.company)
        },
        deleteCompany(state, action) {
            state.catalog[action.payload.index].rating[action.payload.rating_index].companies = state.catalog[action.payload.index].rating[action.payload.rating_index].companies.filter((e, i) => { return e.key !== action.payload.company_index })
        }
    }
});

export const mainActions = mainSlice.actions;
export default mainSlice;

import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        catalog: []
    },
    reducers: {
        copyCatalog(state, action) {
            state.catalog = action.payload
        },
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
            state.catalog[action.payload.index].rating[action.payload.rating_index].companies = state.catalog[action.payload.index].rating[action.payload.rating_index].companies.filter((e, i) => {
                if (e.key) {
                    return e.key !== action.payload.company_index
                }
                if (e._id) {
                    return e._id !== action.payload._id
                }
            })
        },
        changeRatingValue(state, action) {
            state.catalog[action.payload.index].rating[action.payload.rating_index].rating_value = action.payload.rating_value
        }

    }
});

export const mainActions = mainSlice.actions;
export default mainSlice;

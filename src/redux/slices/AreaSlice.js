import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    name: null,
    description: null,
    permissions: []
}

export const areaSlice = createSlice({
    name: 'area',
    initialState,
    reducer:{
        setArea: (state, action) => {
            const {id, name, description, permissions} = action.payload;
            state.id = id;
            state.name = name;
            state.description = description;
            state.permissions = permissions;
        }
    }
})

export const { setArea } = areaSlice.actions;
export default areaSlice.reducer;
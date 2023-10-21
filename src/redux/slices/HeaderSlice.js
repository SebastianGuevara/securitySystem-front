import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarWidth: "0px"
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        toggleSidebar: (state, action) => {
            const {sidebarWidth} = action.payload;
            state.sidebarWidth = sidebarWidth;
        }
    }
})

export const { toggleSidebar } = headerSlice.actions;
export default headerSlice.reducer;
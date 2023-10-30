import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    charge: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUser: (state, action) => {
            const {id, firstName, lastName, email, password, charge} = action.payload;
            state.id = id;
            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
            state.password = password;
            state.charge = charge;
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

// Define a slice for user management
const userSlice = createSlice({
    name:"user",  // Slice name
    initialState:[], // Initial state
    reducers:{
          // Reducer function to add a user
        addUser(state , action){
            state.push(action.payload)
        },
         // Reducer function to remove a user
        removeUser(state,action){
            state.splice(action.payload,1)
        }
    },
});

// Export the reducer function
export default userSlice.reducer;

// Export action creators for addUser and removeUser
export const {addUser , removeUser} = userSlice.actions;
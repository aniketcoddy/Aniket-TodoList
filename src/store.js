import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './UserSlice';

// Configuring Redux store with userSlice reducer
const store = configureStore({
  reducer: {
    users: userSlice,
  }
}) ;


export default store
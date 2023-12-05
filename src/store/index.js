import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import authApi from "./services/authApi";
import userApi from "./services/userApi";

//creating the whole store
//and configuring slices and APIS
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    //passing the APIs
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([authApi.middleware, userApi.middleware]),
});

//exporting the store
export default store;

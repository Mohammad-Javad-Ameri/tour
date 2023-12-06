import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseApi";

//creating user api
const userApi = createApi({
    reducerPath: 'userApi',
    //setting base url and token
    baseQuery: baseQueryWithReauth,
    //for caching purposes
    tagTypes: ["User"],
    endpoints: (builder) => ({
        //get the user info
        getMe: builder.query({
            query() {
                return {
                    url: 'api/Account/GetUserInfoBySelf',
                    method: 'GET',
                }

            },
            providesTags: ['User'],
        }),
        //updating user info
        updateUserInfo: builder.mutation({
            query(data) {
                return {
                    url: 'api/Account/UpdateUserInfo',
                    method: 'PUT',
                    body: data,
                }
            },
            invalidatesTags: ['User'],

            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                  await queryFulfilled;
                    await dispatch(userApi.endpoints.getMe.initiate());
                } catch (error) { console.log(error) }
            },
        }),
        updateUserBio: builder.mutation({
            query(data) {
                return {
                    url: 'UpdateUserBio',
                    method: 'PUT',
                    body: data,
                }
            },
        })
    })

})

export default userApi
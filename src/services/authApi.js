import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import userApi from "./userApi";


const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery:fetchBaseQuery({
        baseUrl: `https://tour.iran.liara.run/`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token')

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query(data) {
                return {
                    url: 'api/Account/RegisterByEmail',
                    method: 'POST',
                    body: data
                }
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data : {data} } = await queryFulfilled;
                    console.log(data);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('refreshToken', data.token);
                    await dispatch(userApi.endpoints.getMe.initiate(null));
                } catch (error) { console.log(error) }
            },
        }),
        //login with with email or username
        loginUser: builder.mutation({
            query(data) {
                return {
                    url: 'api/Account/LoginByEmailOrUserName',
                    method: 'POST',
                    body: data,
                }
            },
            // call get user info when user is logged in
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data : {data} } = await queryFulfilled;
                    console.log(data);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('refreshToken', data.refreshToken);
                    // await dispatch(userApi.endpoints.getMe.initiate(null));
                } catch (error) { console.log(error) }
            },
        }),
        //login with phone number
        loginWithPhoneNumber: builder.mutation({
            query(data) {
                return {
                    url: 'api/Account/SignInByPhoneNumber',
                    method: 'POST',
                    body: data
                }
            },
            //call get user info when user is logged in
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getMe.initiate(null));
                } catch (error) { console.log(error) }
            },
        }),
        //refresh token
        refreshToken : builder.query({
            query : (data) => {
                return {
                    url : 'api/Account/RefreshToken',
                    method : 'POST',
                    body : data
                }
            }
        }),
        //get sms code with phone number
        getSms: builder.query({
            query: (phonenumber) => {
                return {
                    url: 'GetSMsCode' + new URLSearchParams({
                        PhoneNumber: phonenumber
                    }),
                    method: 'GET'
                }
            }
        })
    })
})

export default authApi
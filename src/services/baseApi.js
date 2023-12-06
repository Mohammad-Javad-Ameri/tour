import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import authApi from './authApi';


//providing baseUrl and token for every request
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://tour.iran.liara.run/',
  prepareHeaders: (headers) => {
    // If we have a token set in state, let's assume that we should be passing it.
    let token = localStorage.getItem('token')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    // headers.set('Access-Control-Allow-Origin', '*')
    return headers
  },
  
  credentials: 'same-origin',
})

//logic for getting the new token if response returns unauthorized
const baseQueryWithReauth = async (args, api, extraOptions) => {
  console.log(`making ${args.url} call ---------->`, args);
  let result = await baseQuery(args, api, extraOptions)
  console.log(`getting ${args.url} result ---------->`, result);
  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery(
      {
        url: 'api/Account/RefreshToken',
        method: 'POST',
        body: {
          refreshToken: localStorage.getItem('refreshToken')
        }
      }, // get the refresh token from local storage,
      api,
      extraOptions
    )
    console.log("getting refresh token result ---------->", refreshResult);
    if (!refreshResult.error) {
      // store the new token
      localStorage.setItem('refreshToken', refreshResult.data.data.refreshToken)
      localStorage.setItem('token', refreshResult.data.data.token)

      // retry the initial query
      result = await baseQuery(args, api, extraOptions)
    } else {
      // api.dispatch(loggedOut())
      console.log('log out');
    }
  }
  return result
}

export default baseQueryWithReauth


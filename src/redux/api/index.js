import { fetchBaseQuery, retry, createApi } from "@reduxjs/toolkit/query/react";
const baseQuery = async (args, api, extraOptions) => {

     const rawBaseQuery = fetchBaseQuery({
          baseUrl: "http://makeup-api.herokuapp.com/api/v1",
          prepareHeaders: (headers) => {
               const token = localStorage.getItem("token")
               if(token) {
                    headers.set("authorization", `Bearer ${token}`)
               }

               return headers
          }
     })

     const response = await rawBaseQuery(args, api, extraOptions)

     return response
}

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 0})

export const api = createApi({
     reducerPath: "api",
     baseQuery: baseQueryWithRetry,
     tagTypes: ["Parfumes", "Make"],
     endpoints: () => ({})
})
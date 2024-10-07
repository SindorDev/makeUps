import { api } from "./index";


const MakeUps = api.injectEndpoints({
       endpoints: (build) => ({
              getMake: build.query({
                     query: () => ({
                            url: "/products.json",
                     }),
                     providesTags: ["Make"]
              }),
              getCategory: build.mutation({
                     query: (type) => ({
                            url: `/products.json?product_category=${type}`
                     }),
                     invalidatesTags: ["Parfumes"]
              }),
              getBrand: build.mutation({
                     query: (brand) => ({
                            url: `/products.json?brand=${brand}`
                     }),
                     invalidatesTags: ["Parfumes"]
              }),
              getProductType: build.mutation({
                     query: (product) => ({
                            url: `/products.json?product_type=${product}`
                     }),
                     providesTags: ["Make"]
              }),
              getDetailsData: build.mutation({
                     query: (id) => ({
                            url: `products/${id}.json`,
                     }),
                     invalidatesTags: ["Parfumes"]
              })
       })
})

export const { useGetMakeQuery, useGetCategoryMutation, useGetBrandMutation, useGetProductTypeMutation, useGetDetailsDataMutation } = MakeUps
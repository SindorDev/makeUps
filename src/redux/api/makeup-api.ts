import { Response } from "../../types";
import { api } from "./index";

const MakeUps = api.injectEndpoints({
  endpoints: (build) => ({
    getMake: build.query<Response, void>({
      query: () => ({
        url: "/products.json",
      }),
      providesTags: ["Make"],
    }),
    getCategory: build.mutation<Response, string>({
      query: (type) => ({
        url: `/products.json?product_category=${type}`,
      }),
      invalidatesTags: ["Parfumes"],
    }),
    getBrand: build.mutation<Response, string>({
      query: (brand) => ({
        url: `/products.json?brand=${brand}`,
      }),
      invalidatesTags: ["Parfumes"],
    }),
    getProductType: build.mutation<Response, string>({
      query: (product) => ({
        url: `/products.json?product_type=${product}`,
      }),
      invalidatesTags: ["Parfumes"],
    }),
    getDetailsData: build.mutation<Response, string>({
      query: (id) => ({
        url: `products/${id}.json`,
      }),
      invalidatesTags: ["Parfumes"],
    }),
    getSearchData: build.mutation<Response, string>({
      query: (query) => ({
        url: `products.json?product_type=${query}`,
      }),
      invalidatesTags: ["Parfumes"],
    }),
  }),
});

export const {
  useGetMakeQuery,
  useGetCategoryMutation,
  useGetBrandMutation,
  useGetProductTypeMutation,
  useGetDetailsDataMutation,
  useGetSearchDataMutation,
} = MakeUps;

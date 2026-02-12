import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryAPI = fetchBaseQuery({
  baseUrl: "https://test-nck3.onrender.com/api",
  // baseUrl: "http://localhost:5000/api",
});

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  baseQuery: baseQueryAPI,
  tagTypes: [],
  endpoints: () => ({}),
});

import { baseAPI } from "../baseApi";

const blogApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => `/blog`,
    }),
    getSingleBlog: builder.query({
      query: ({ blogId }) => `/blog/${blogId}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetSingleBlogQuery } = blogApi;

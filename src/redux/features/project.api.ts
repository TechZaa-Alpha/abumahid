import { baseAPI } from "../baseApi";

const projectApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: ({ isFeatured }) => `/project?isFeatured=${isFeatured}`,
    }),
    getSingleProject: builder.query({
      query: ({ projectId }) => `/project/${projectId}`,
    }),
  }),
});

export const { useGetProjectsQuery, useGetSingleProjectQuery } = projectApi;

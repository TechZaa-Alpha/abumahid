import { baseAPI } from "../baseApi";

const videoApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => `/video`,
    }),
  }),
});

export const { useGetVideosQuery } = videoApi;

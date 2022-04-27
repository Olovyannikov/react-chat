import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const chatApi = createApi({
    reducerPath: 'chatApi',
    tagTypes: ['Chat'],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_SOCKET || 'http://localhost:4200/',
        prepareHeaders: (headers, { getState }) => {
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH, DELETE, OPTIONS');
            return headers;
        },
    }),
    endpoints: (build) => ({
        fetchRoomValues: build.mutation({
            query: (values) => ({
                url: '/rooms',
                method: 'POST',
                body: values,
            }),
            invalidatesTags: ['Chat'],
        }),
    }),
});

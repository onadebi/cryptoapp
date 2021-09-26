import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { AnyObject } from 'chart.js/types/basic';


const cryptoApiHeaders = {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'efe31873c6mshe6dc80ee432ee5dp1f65a8jsn6a74f8f17281'
      };

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url: any)=> ({url, headers: cryptoApiHeaders});
export const cryptoApi = createApi({
    reducerPath: 'cryptoapi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:() => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;
// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/exchanges',
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': 'efe31873c6mshe6dc80ee432ee5dp1f65a8jsn6a74f8f17281'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
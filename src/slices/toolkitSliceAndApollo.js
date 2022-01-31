import { createSlice } from '@reduxjs/toolkit';
import {
  ApolloClient, InMemoryCache, useQuery, gql,
} from '@apollo/client';

const initialState = {
  value: 0,

};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log('state of counter', state.value);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
}); // reducer

export const {
  increment, decrement, reset, incrementByAmount,
} = counterSlice.actions;
export default counterSlice.reducer;

const isServer = typeof window === 'undefined';
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

let CLIENT;

export function getApolloClient(forceNew) {
  if (!CLIENT || forceNew) {
    CLIENT = new ApolloClient({
      ssrMode: isServer,
      // uri: 'https://api.shopcarx.com/graphql',
      uri: 'http://localhost:1337/graphql',
      cache: new InMemoryCache().restore(windowApolloState || {}),

      /**
        // Default options to disable SSR for all queries.
        defaultOptions: {
          // Skip queries when server side rendering
          // https://www.apollographql.com/docs/react/data/queries/#ssr
          watchQuery: {
            ssr: false
          },
          query: {
            ssr: false
          }
          // Selectively enable specific queries like so:
          // `useQuery(QUERY, { ssr: true });`
        }
      */
    });
  }

  return CLIENT;
}

export const CARSQUERY = gql`
  query Variants {
    variants(limit: 1000) {
      year
      vin: car_vin
      make
      model
      status: vehicle_status
      dealership: car_dealership
    }
  }
`;

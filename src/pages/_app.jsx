import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { store } from '../store';
// import { getApolloClient } from '../slices/toolkitSliceAndApollo';
import { getApolloClient } from '../data/apollo';

function MyApp({ Component, pageProps }) {
  const client = getApolloClient();
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;

import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { store } from '../store';
// import { getApolloClient } from '../data/apollo';
import { getApolloClient } from '../slices/toolkitSliceAndApollo';

function MyApp({ Component, pageProps }) {
  const client = getApolloClient();
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;

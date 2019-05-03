import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App';

import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

const rootElement = document.getElementById('root');
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);

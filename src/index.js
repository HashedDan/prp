import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'tachyons'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import registerServiceWorker from './registerServiceWorker';

const httpLink = createHttpLink({ uri: 'https://api.graph.cool/simple/v1/cjgocinji2i330107dsev0tho/graphql' });

const middlewareLink = setContext(() => ({
  headers: {
    authorization: localStorage.getItem('graphcoolToken') || null,
  }
}));

const link = middlewareLink.concat(httpLink)

const client = new ApolloClient({ link });

ReactDOM.render((
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          {/* <Route exact path='/create' component={CreatePost} /> */}
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
    ), 
    document.getElementById('root'));
registerServiceWorker();

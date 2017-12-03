import React, { Component } from 'react';
import {View, Text} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import {Map} from 'immutable';

// Style stuff
import {loadingScreenStyle} from './styles/generalStyles';

// Redux stuff
import traianApp from './redux/reducer';
import logger from 'redux-logger'
import {loadState, saveState} from './redux/persistence';
import {createStore, applyMiddleware} from 'redux';

export default class AppWrapper extends Component<{}> {
  constructor(props) {
    super(props);
    this.state={
      loading: true,
      store: null
    }
  }

  componentWillMount = () => {
    var that = this;
    loadState().then((state) => {
      var store = createStore(traianApp, state, applyMiddleware(logger));
      store.subscribe(() => {
        saveState(store.getState())
      });

      that.unsubscribe = store.subscribe(()=> {return null});
      that.setState({store: store, loading: false})
    })
  }

  componentWillUnmount = () => {
    this.unsubscribe()
  }

  render = () => {
    if (this.state.loading) {
      return (
        <Text>Loading</Text>
      )
    } else {
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }
}

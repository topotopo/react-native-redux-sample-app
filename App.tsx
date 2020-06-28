import React from 'react';
import {
  View,
  SafeAreaView,
  Text
} from 'react-native';

import { Provider } from 'react-redux'
import { store } from './state/store'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>MedShelf</Text>
      </SafeAreaView>
    </Provider>
  );
};

export default App
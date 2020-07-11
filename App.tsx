import React from 'react';
import {
  View,
  SafeAreaView,
  Text
} from 'react-native';

import { Provider } from 'react-redux'
import { store } from './state/store'
import { MedicineItem } from './components/item_medicine';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <MedicineItem></MedicineItem>
      </SafeAreaView>
    </Provider>
  );
};

export default App
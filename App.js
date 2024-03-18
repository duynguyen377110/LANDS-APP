import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import store from './store';
import { commonStyles } from "./styles";

import Router from "./router/router";

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

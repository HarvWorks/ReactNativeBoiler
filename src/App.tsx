import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from './navigators/rootNavigator';

// declare const global: {HermesInternal: null | {}};

const App = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);

export default App;

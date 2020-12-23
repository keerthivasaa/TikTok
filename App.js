import React from 'react';
import {SafeAreaView,Text} from 'react-native';

import 'react-native-gesture-handler';

import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style= {{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
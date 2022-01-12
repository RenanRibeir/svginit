import React from 'react';
import {View, Text} from 'react-native';

import IconBook from './assets/book.svg';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Svg Test</Text>
      <IconBook fill="#000" width={120} height={120} />
    </View>
  );
};

export default App;

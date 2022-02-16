/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <Text
        adjustsFontSizeToFit
        onTextLayout={() => {
          console.log('Text layout changed');
        }}>
        Some text
      </Text>
    </View>
  );
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Animated,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import BouncingButton from '../Helper/BouncingButton'
import FloatButton from '../Helper/FloatButton'

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <BouncingButton />
      <FloatButton style={{ bottom: 100 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#c0d9ef',
    alignItems: 'center',
  }
});

export default App;

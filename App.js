/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable prettier/prettier */

import React from 'react';
import Login from './src/Screens/Authentication/login/index'
import SignUp from './src/Screens/Authentication/SignUp/index'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Welcome from './src/Screens/Onboarding/welcome'
import Floor from './src/Screens/Configuratuion/Floor/Floor'
import Room from './src/Screens/Configuratuion/Room/room'
import SelectType from './src/Common/selectHouseType'
import SelectionType from './src/Common/selectHouseType';

const App: () => React$Node = () => {
  return (
    // <Welcome/>
    // <Login/>
    // <SignUp/>
    // <Floor/>
    // <Room/>
    // <SelectionType/>
  )
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';
 import ListScreen from './ListScreen'
 import JesusScreen from './JesusScreen'
 import {
   StackNavigator,
 } from 'react-navigation';
 const App = StackNavigator({
   Loading: { screen: JesusScreen, navigationOptions: null},
   List: { screen: ListScreen },
 });
 export default App;

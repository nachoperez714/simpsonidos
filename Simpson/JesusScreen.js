'use strict';
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Alert,
  FlatList,
  Button,
  Text,
  Image,
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

var self
export default class JesusScreen extends Component {

  static navigationOptions= {title: 'Simpsonidos', header: null};

  constructor (props) {
    super(props)
     self = this
  }

   componentWillMount = () => {
       setTimeout(function() {
           self.navigateAfterFinish('List');
       }, 3000);
   }

  navigateAfterFinish = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'List' })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render () {
    return (
      <View style = {styles.containerGif} >
        <Image source={require('./jesus.gif')} style={{flex: 1,width:250}}/>
    </View>
  );
};
}

const styles = StyleSheet.create({
  containerGif: {
    alignItems: 'center',
    backgroundColor: '#84C6E8',
    flex: 1
  }
});

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
  TextInput,
  Share
} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { PlaySound, StopSound, PlaySoundRepeat, PlaySoundMusicVolume } from 'react-native-play-sound';
import ShareAudio from './ShareAudio';
import SoundRepository from './SoundRepository';
// import {
//   AdMobBanner,
// } from 'react-native-admob'
//var RNFetchBlob = require('react-native-fetch-blob');
////import DBHandler from './DBHandler';


const KEYS_TO_FILTERS = ['name'];

class ListItem extends React.PureComponent {

  _onPress = () => {
    this.props.onPressItem(this.props.item);
  }

  _onLongPress = () => {
    this.props.onLongPressItem(this.props.item);
  }

  render () {
    const item = this.props.item;
    return (
      <TouchableHighlight
        onPress = {this._onPress}
        onLongPress = {this._onLongPress}
        underlayColor = '#dddddd'>
        <View style = {styles.item_container}>
        <Image source={require('./donut.png')} style={styles.image}/>
        <Text style = {styles.soundName}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
}
}


export default class ListScreen extends Component {

  static navigationOptions= {title: 'Simpsonidos', header: null};

  constructor(props) {
      super(props);
    this.state = {
      searchInput: ''
    };
  }

  searchUpdated(term) {
  this.setState({ searchInput: term })
}

  _onInputChanged = (event) => {
    this.setState({searchInput: event.nativeEvent.text});
  };

  _onItemPress = (item) => {
    //let fs = RNFetchBlob.fs
    //const dirs = fs.dirs()
    //let RingtoneDir = dirs.RingtoneDir
    PlaySound(item.audio)
  }

  _onLongItemPress = (item) => {
    ShareAudio.share(item.link)
  }

  _renderItem = ({item, index}) => (
    <ListItem
      item = {item}
      index = {index}
      onPressItem = {this._onItemPress}
      onLongPressItem = {this._onLongItemPress}/>
  );

  render () {
    let repo = SoundRepository.getInstance();
    var list = repo.getItems();
    const filteredSounds = list.filter(createFilter(this.state.searchInput, KEYS_TO_FILTERS))
    return (
      <View style = {styles.container}>

        <SearchInput style={styles.textInput}
          underlineColorAndroid = {'transparent'}
          onChangeText = {(term) => { this.searchUpdated(term) }}
          returnKeyType = {'search'}
          placeholder = "Search"/>

        <FlatList contentContainerStyle = {styles.list}
          numColumns = {3}
          data = {filteredSounds}
          keyExtractor = {(item, index) => index}
          renderItem = {this._renderItem} />

          {/* <AdMobBanner
            adSize="fullBanner"
            adUnitID="your-admob-unit-id"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)}/> */}
    </View>

    );
  };
}


const styles = StyleSheet.create({
  textInput:{
    height:40,
    backgroundColor: '#A0D2F1',
    fontFamily:"simpson_font",
    color:'#FFD90F'
  },
  list: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  soundName: {
    marginTop:12,
    marginStart:8,
    fontFamily:"simpson_font",
    color:'#FFD90F'
  },
  item_container: {
    margin:8,
    width: 95
  },
  container: {
    padding: 10,
    backgroundColor: '#84C6E8',
    flex: 1
  },
  containerGif: {
    alignItems: 'center',
    backgroundColor: '#84C6E8',
    flex: 1
  },
  image: {
    height: 50,
    width: 50,
    alignSelf: 'center'
  }
});

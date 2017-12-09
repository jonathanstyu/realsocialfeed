import React, {Component} from 'react';
import {SectionList, FlatList, StyleSheet, Image,
  Text, View, RefreshControl, Button,
  AsyncStorage, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux';
import {general, newsfeed} from '../styles/generalStyles';

export default class RealNewsViewer extends Component<{}> {
  _return = () => {
    this.props.navigator.pop()
  }

  render() {
    return(
      <View>
        <Text>Story</Text>
        <Button onPress={this._return} title="POP" />
      </View>
    )
  }
}

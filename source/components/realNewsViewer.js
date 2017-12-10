import React, {Component} from 'react';
import {SectionList, FlatList, StyleSheet, Image,
  Text, View, RefreshControl, Button,
  AsyncStorage, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux';
import {general} from '../styles/generalStyles';

export default class RealNewsViewer extends Component<{}> {
  constructor(props) {
    super(props)
    this.state={
      moving: false
    }
  }

  _responderMove = (evt) => {
    console.log(evt);
    // this.setState({moving: true})
  }

  _return = () => {
    this.props.navigator.pop()
  }

  render() {
    return(
      <View
        onStartShouldSetResponder={() => true}
        style={[general.screen,
          this.state['moving'] ? highlightedStyle.activated : null
        ]}
        onResponderRelease={this._responderMove}
        >
        <Text>Story</Text>
        <Button onPress={this._return} title="POP" />
      </View>
    )
  }
}

const highlightedStyle = StyleSheet.create({
  activated: {
    borderWidth: 1,
    borderColor: "green"
  }
})

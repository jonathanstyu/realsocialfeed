import React, {Component} from 'react';
import {SectionList, FlatList, StyleSheet, Image,
  Text, View, RefreshControl,
  AsyncStorage, TouchableHighlight,
  ActivityIndicator } from 'react-native';

import Moment from 'moment';
import FeedItemGenerator from '../data/feedItemGenerator'
import {connect} from 'react-redux';
import {chatroom} from '../styles/generalStyles';

import RealChatView from './realchatview';

export default class RealChatRoom extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      threads: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = async () => {
    this.setState({
      threads: FeedItemGenerator.createChatThreads(30)
    })
  }

  _keyExtractor = (item, index) => {
    return item.key;
  }

  _onRefresh = async () => {
    this.setState({refreshing: true})
  }

  _onPressItem = (sender) => {
    this.props.navigator.push({
      passProps: {sender: sender},
      component: RealChatView,
      showTabBar: false,
      title: sender
    })
  }

  _renderItem = (item) => {
    // {Moment.unix(item.lastsent).format("ddd ")}
    return (
      <TouchableHighlight
        onPress={() => this._onPressItem(item.chatSender)}>
        <View style={chatroom.cell}>
          <View style={chatroom.chatHeadBar}>
            <Text style={chatroom.chatHeader}>{item.chatSender}</Text>
            <Text style={chatroom.chatSubtitle}>
              {Moment(item.lastsent).format('ddd h:mm A')}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <FlatList style={chatroom.list}
        data={this.state.threads}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => this._renderItem(item)}
        />
    )
  }
}

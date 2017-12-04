import React, {Component} from 'react';
import {SectionList, FlatList, StyleSheet, Image,
  Text, View, RefreshControl,
  AsyncStorage, TouchableHighlight,
  ActivityIndicator } from 'react-native';

import Moment from 'moment';
import FeedItemGenerator from '../data/feedItemGenerator'
import {connect} from 'react-redux';
import {notificationstyle} from '../styles/generalStyles';

// import RealEmail from './realEmailView';

class RealNotifications extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      notifications: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = async () => {
    this.setState({
      threads: FeedItemGenerator.createNotifications(10, this.props.friends)
    })
  }

  _keyExtractor = (item, index) => {
    return item.key;
  }

  _onRefresh = async () => {
    this.setState({refreshing: true})
  }

  _onPressItem = (notification) => {
    this.props.navigator.push({
      passProps: {notification: notification},
      component: RealNotificationScreen,
      showTabBar: false,
      title: notification.about
    })
  }

  _renderItem = (item) => {
    return (
      <TouchableHighlight
        onPress={() => this._onPressItem(item)}>
        <View style={notificationstyle.cell}>
          <View style={notificationstyle.HeadBar}>
            <Text numberOfLines={2}><Text style={notificationstyle.Header}>{item.about}</Text> did this amazing thing that you should totally know about.</Text>
            <Text style={notificationstyle.Subtitle}>
              {Moment(item.sent).format('ddd h:mm A')}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <FlatList style={notificationstyle.list}
        data={this.state.threads}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => this._renderItem(item)}
        />
    )
  }
}

mapStateToProps = (state) => {
  return {
    friends: state.get('friends')
  }
}

mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RealNotifications)

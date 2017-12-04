import React, {Component} from 'react';
import {SectionList, FlatList, StyleSheet, Image,
  Text, View, RefreshControl,
  AsyncStorage, TouchableHighlight,
  ActivityIndicator } from 'react-native';

import Moment from 'moment';
import FeedItemGenerator from '../data/feedItemGenerator'
import {connect} from 'react-redux';
import {emailstyle} from '../styles/generalStyles';

import RealEmail from './realEmailView';

class RealEmailInbox extends Component<{}> {
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
      threads: FeedItemGenerator.createEmails(20, this.props.friends)
    })
  }

  _keyExtractor = (item, index) => {
    return item.key;
  }

  _onRefresh = async () => {
    this.setState({refreshing: true})
  }

  _onPressItem = (email) => {
    this.props.navigator.push({
      passProps: {email: email},
      component: RealEmail,
      showTabBar: false,
      title: email.emailer
    })
  }

  _renderItem = (item) => {
    return (
      <TouchableHighlight
        onPress={() => this._onPressItem(item)}>
        <View style={emailstyle.cell}>
          <View style={emailstyle.emailHeadBar}>
            <Text style={emailstyle.emailHeader}>{item.emailer}</Text>
            <Text style={emailstyle.emailSubtitle}>
              {Moment(item.sent).format('ddd h:mm A')}
            </Text>
          </View>
          <Text
            numberOfLines={1}
            style={emailstyle.subjectLineStyle}
            >{item.emailSubjectLine}</Text>
          <Text numberOfLines={3}>{item.emailBody}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <FlatList style={emailstyle.list}
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

export default connect(mapStateToProps, mapDispatchToProps)(RealEmailInbox)

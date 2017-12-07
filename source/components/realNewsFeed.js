import React, {Component} from 'react';
import {SectionList, FlatList, StyleSheet, Image,
  Text, View, RefreshControl,
  AsyncStorage, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux';
import {general, newsfeed} from '../styles/generalStyles';
import Toast, {DURATION} from 'react-native-easy-toast'


// Generators and Components
import FeedItemGenerator from '../data/feedItemGenerator';
import RealNewsFeedItem from './realNewsFeedItem';

class RealNewsFeed extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      threads: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {
    var items = FeedItemGenerator.createFeedStories(20, this.props.friends);
    this.setState({
      threads: items
    })
  }

  _keyExtractor = (item, index) => {
    return item.key;
  }

  _onRefresh = async () => {
    this.setState({refreshing: true})
  }

  _renderItem = (item) => {
    return <RealNewsFeedItem item={item} itemHandler={this._itemPressed} />
  }

  _endReached = async () => {
    var newItems = FeedItemGenerator.createFeedStories(20, this.props.friends);
    this.setState((previousState) => {
      return {
        threads: previousState.threads.concat(newItems)
      }
    })
  }

  _itemPressed = () => {
    console.log("HELLO");
  }

  render() {
    return(
      <FlatList style={newsfeed.list}
        data={this.state.threads}
        keyExtractor={this._keyExtractor}
        onEndReachedThreshold={0.7}
        onEndReached={this._endReached}
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

export default connect(mapStateToProps, mapDispatchToProps)(RealNewsFeed)

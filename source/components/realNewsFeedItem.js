import React, {Component} from 'react';
import {SectionList, StyleSheet, Image,
  Text, View, RefreshControl, TouchableHighlight, Vibration } from 'react-native';
import {general, newsfeed} from '../styles/generalStyles';

import faker from 'faker';
import Canvas from 'react-native-canvas';
import Svg, {Circle} from 'react-native-svg';

export default class RealNewsFeedItem extends Component<{}> {
  constructor(props) {
    super(props)

    this.state = {
      likes: faker.random.number(35),
      comments: faker.random.number(35),
      shares: faker.random.number(35)
    }
  }

  _likeThis = () => {
    Vibration.vibrate()
    this.setState((previousState) => {
      return {
        likes: previousState.likes + 1
      }
    })
  }

  _commentThis = () => {
    this.setState((previousState) => {
      return {
        comments: previousState.comments + 1
      }
    })
  }

  _shareThis = () => {
    this.setState((previousState) => {
      return {
        shares: previousState.shares + 1
      }
    })
  }

  handleCanvas = (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, 100, 100);
  }

  render() {
    var item = this.props.item;
    // <Image
    //   style={newsfeed.image}
    //   source={{uri: item.image}}
    //   backgroundColor='darkred'
    //   />
    // <Canvas ref={this.handleCanvas}/>
    return (
      <View style={newsfeed.mainCellLayout}>
        <Text style={newsfeed.avatarText}>{item.poster} says ...</Text>
        <Svg height='100' width='100'>
          <Circle cx='50' cy='50' stroke='blue' fill='green' r='45' />
        </Svg>
        <View style={newsfeed.textContainer}>
          <Text numberOfLines={2} style={newsfeed.titleText}>{item.headline}</Text>
          <Text numberOfLines={3}>{item.body}</Text>

          <View style={newsfeed.actionBar}>
            <TouchableHighlight onPress={this._likeThis}>
              <View>
                <Text>{ this.state.likes } Likes</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._commentThis}>
              <Text>{this.state.comments} Comments</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._shareThis}>
              <Text>{ this.state.shares } Shares</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Image, Dimensions, WebView,
  Text, View, TouchableHighlight, Vibration } from 'react-native';
import {general, newsfeed} from '../styles/generalStyles';

import faker from 'faker';
import Svg, {Circle} from 'react-native-svg';

// Webview Components
import magiceyeTextHTML from './helpers/magiceye-text.html';
import aframeHTML from './helpers/aframe.html';

export default class RealNewsFeedItem extends Component<{}> {
  constructor(props) {
    super(props)

    this.state = {
      likes: faker.random.number(35),
      comments: faker.random.number(35),
      shares: faker.random.number(35),
    }
  }

  _likeThis = (action) => {
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

  render() {
    var item = this.props.item;
    var visual = null;
    switch (item.imageType) {
      case 'pic':
        visual = (
          <Image
            style={newsfeed.image}
            source={{uri: item.image}}
            backgroundColor={item.loadingColor}
            />
        )
        break;

      case 'svg':
        var {height, width} = Dimensions.get('window');
        visual = (
          <Svg width={width} height='400'>
            {
              item.svgData ? <Circle cx='50' cy='50' stroke='blue' fill='green' r='45' /> : <Circle cx='50' cy='50' stroke='blue' fill='yellow' r='45' />
            }
          </Svg>
        )
        break;

      case 'magic-eye':
        var {height, width} = Dimensions.get('window');
        visual = (
          <View>
            <WebView
              source={magiceyeTextHTML}
              style={{width: width, height: 300}}
              scrollEnabled={false}
              />
          </View>
        )
        break;

      case 'aframe':
        var {height, width} = Dimensions.get('window');
        visual = (
          <View>
            <WebView
              source={aframeHTML}
              style={{width: width, height: 300}}
              scrollEnabled={false}
              />
          </View>
        )
        break;
      default:
        visual = null
    }

    return (
      <View style={newsfeed.mainCellLayout}>
        <Text style={newsfeed.avatarText}>{item.poster} says ...</Text>
        <RealFeedErrorHandler>
          <TouchableOpacity onPress={this.props.itemHandler}>
            {visual}
          </TouchableOpacity>
        </RealFeedErrorHandler>
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


class RealFeedErrorHandler  extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{
          backgroundColor: "black"
        }}>
          <Text>This Component has Error'ed Out</Text>
        </View>
      );
    }
    return this.props.children
  }
}

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import FeedItemGenerator from '../data/feedItemGenerator';

import {chat} from '../styles/generalStyles';
import faker from 'faker';

export default class RealChatView extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      messages: FeedItemGenerator.createChat(this.props.sender, 5),
      typingText: null
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {

  }

  _onSend = (messages=[]) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    this.answerBack()
  }

  _onReceive = (text) => {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: this.props.sender
          }
        })
      }
    })
  }

  answerBack(message) {
    this.setState((previousState) => {
      return {
        typingText: "She is typing back"
      }
    })

    setTimeout(() => {
      this._onReceive(faker.lorem.sentence())

      this.setState((previousState) => {
        return {
          typingText: null
        }
      })
    }, 1000)
  }

  renderFooter = (props) => {
    if (this.state.typingText) {
      return (
        <View style={chat.footerContainer}>
          <Text style={chat.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    var that = this;
    return(
      <GiftedChat
        style={chat.chat}
        messages={that.state.messages}
        onSend={(messages) => this._onSend(messages)}
        user={{
          name: "Me",
          _id: 1
        }}
        renderFooter={this.renderFooter}
      />
    )
  }
}

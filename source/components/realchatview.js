import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import FeedItemGenerator from '../data/feedItemGenerator'
import {chat} from '../styles/generalStyles';

export default class RealChatView extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      messages: FeedItemGenerator.createChat(this.props.sender, 5)
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {

  }

  _onSend = (messages=[]) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
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
      />
    )
  }
}

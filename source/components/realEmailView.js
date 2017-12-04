import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {email} from '../styles/generalStyles';

export default class RealEmailView extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {

  }

  render() {
    var that = this;
    return(
      <View>
        <Text>Hello</Text>
      </View>
    )
  }
}

import React from 'react';
import {Switch, StyleSheet, Image, Text, View, Settings, AsyncStorage, FlatList, TouchableHighlight, AlertIOS} from 'react-native';
import {connect} from 'react-redux';

import {settingsstyles} from '../styles/generalStyles';

class SettingsView extends React.Component {
  constructor(props) {
    super(props);
  }

  _keyExtractor = (item, index) => {
    return index
  }

  _renderItem = (props) => {
    return (
      <View key={props}
        style={settingsstyles.cellContainer}
        >
        <Text key={props} style={[settingsstyles.label
          ]}>
          {props}
        </Text>
        <Switch
          onValueChange={() => this.props.flipSetting(props)}
          value={this.props.settings[props]} />
      </View>
    )
  }

  render = () => {
    return (
      <View style={[settingsstyles.settingsContainer,
        ]}>
        <FlatList style={[

          ]}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => this._renderItem(item)}
        data={Object.keys(this.props.settings)}
        />
        <TouchableHighlight
          underlayColor={"white"}
          style={[settingsstyles.buttonContainer]}
          onPress={this.props.reset}>
            <Text style={settingsstyles.buttonStyle}>Reset Data</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    settings: {}
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    flipSetting: (settingKey) => {
      dispatch({
        type: 'flip_setting',
        settingKey: settingKey
      })
    },
    reset: () => {
      dispatch({
        type: "reset_data"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView)

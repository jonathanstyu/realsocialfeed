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
        <Text key={props} style={[settingsstyles.label,
          this.props.darkMode ? darkstyle.cellCopyDark : null
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
        (this.props.darkMode ? darkstyle.listDark : null)]}>
        <FlatList style={[
          (this.props.darkMode ? darkstyle.listDark : null)
          ]}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => this._renderItem(item)}
        data={Object.keys(this.props.settings)}
        />
        <TouchableHighlight
          underlayColor={this.props.darkMode ? "white" : "red"}
          style={[settingsstyles.buttonContainer,
          (this.props.darkMode ? darkstyle.buttonDark : null)]}
          onPress={this.props.emptyJobs}>
            <Text style={settingsstyles.buttonStyle}>Delete Jobs</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    settings: state.get('settings'),
    darkMode: state.get('settings')['Dark Mode']
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
    emptyJobs: () => {
      dispatch({
        type: "empty_jobs"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView)

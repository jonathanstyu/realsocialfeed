import React, { Component } from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, StatusBar, TabBarIOS, NavigatorIOS
} from 'react-native';
import {connect} from 'react-redux';

import RealNewsFeed from './components/realNewsFeed';
import RealChatRoom from './components/realchatroom';
import SettingsView from './components/settings';
import RealNotifications from './components/realNotifications';
// import RealEmailInbox from './components/realEmailInbox';
import {general} from './styles/generalStyles';

class App extends Component<{}> {
  render() {
    return (
      <TabBarIOS style={general.screen}>
        <TabBarIOS.Item
          icon={require('./assets/feed.png')}
          title="Feed"
          onPress={() => this.props.selectTab("RealNewsFeed")}
          selected={this.props['selectedTab'] == "RealNewsFeed"}>
          <NavigatorIOS
            initialRoute={{
              component: RealNewsFeed,
              title: 'News Feed',
              showTabBar: true,
            }}
            navigationBarHidden={true}
            style={{flex: 1}}
            />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('./assets/chat.png')}
          title="Chat"
          onPress={() => this.props.selectTab("ChatRoom")}
          selected={this.props['selectedTab'] == "ChatRoom"}>
          <NavigatorIOS
            initialRoute={{
              component: RealChatRoom,
              title: 'Chat',
              showTabBar: true,
            }}
            navigationBarHidden={false}
            style={{flex: 1}}
            />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('./assets/globe.png')}
          title="Notifications"
          onPress={() => this.props.selectTab("Notifications")}
          selected={this.props['selectedTab'] == "Notifications"}>
          <NavigatorIOS
            initialRoute={{
              component: RealNotifications,
              title: 'Notifications',
              showTabBar: true,
            }}
            navigationBarHidden={false}
            style={{flex: 1}}
            />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon='more'
          onPress={() => this.props.selectTab("Settings")}
          selected={this.props['selectedTab'] == "Settings"}>
          <NavigatorIOS
            initialRoute={{
              component: SettingsView,
              title: 'Settings and Info',
              showTabBar: true,
            }}
            navigationBarHidden={false}
            style={{flex: 1}}
            />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

mapStateToProps = (state) => {
  return {
    selectedTab: state.get('selectedTab')
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    selectTab: (tab) => {
      dispatch({
        type: 'select_tab',
        tab: tab
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

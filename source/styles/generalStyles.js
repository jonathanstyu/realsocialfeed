import {StyleSheet, Image} from 'react-native';

export const loadingScreenStyle = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center"
  }
})

export const general = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export const newsfeed = StyleSheet.create({
  list: {
    flex: 1,
  },
  mainCellLayout: {
    margin: 10,
    flexDirection: 'column',
  },
  avatarText: {
    fontWeight: "bold",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
    padding: 5
  },
  image: {
    margin: 10,
    width: 400,
    height: 240,
    resizeMode: Image.resizeMode.contain
  }
})

export const chatroom = StyleSheet.create({
  screen: {
    flex: 1
  },
  cell: {
    margin: 10
  },
  chatHeadBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chatHeader: {
    fontWeight: 'bold',
    fontSize: 16
  },
  chatSubtitle: {
    fontStyle: 'italic'
  }
})

export const chat = StyleSheet.create({
  chat: {
    
  }
})

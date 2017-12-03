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
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'column',
  },
  avatarText: {
    fontWeight: "bold",
    padding: 10
  },
  textContainer: {
    padding: 10
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16
  },
  image: {
    marginTop: 5,
    marginBottom: 5,
    width: null,
    height: 200,
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

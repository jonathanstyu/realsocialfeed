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

export const newsViewer = StyleSheet.create({
  normal: {
    flex: 1
  }
})

export const newsfeed = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'whitesmoke'
  },
  mainCellLayout: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'column',
    shadowColor: 'black',
  },
  mainCellVisual: {
    shadowOffset: {
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.3
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
    fontSize: 16,
    paddingBottom: 10,
  },
  image: {
    marginTop: 5,
    marginBottom: 5,
    width: null,
    height: 200,
    resizeMode: Image.resizeMode.contain
  },
  actionBar: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: 'space-between'
  }
})


export const notificationstyle = StyleSheet.create({
  screen: {
    flex: 1
  },
  cell: {
    margin: 10
  },
  HeadBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Header: {
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 15
  },
  HeaderName: {
    fontWeight: 'bold',
    fontSize: 16
  },
  Subtitle: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  subjectLineStyle: {
    fontStyle: 'italic',
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5
  }
})

export const settingsstyles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  settingsContainer: {
    flex: 3,
    flexDirection: "column",
    paddingBottom: 65,
  },
  cellContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  mainContainer: {
    marginTop: 64,
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10
  },
  buttonStyle: {
    color: 'red',
    fontWeight: "bold",
    fontSize: 20,
  }
});

import {Map, Set} from 'immutable';
import _ from 'lodash';
import FeedItemGenerator from '../data/feedItemGenerator'

const traianApp = (state, action) => {
  if (typeof state == 'undefined') {
    return Map({
      selectedTab: "RealNewsFeed",
      friends: FeedItemGenerator.makeFriends(20)
    });
  }

  switch (action.type) {
    case "select_tab":
      return state.set('selectedTab', action.tab)
      break;
    default:
      return Map.isMap(state) ? state : Map(state);
      break;
  }
}

export default traianApp;

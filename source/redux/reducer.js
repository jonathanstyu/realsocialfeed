import {Map, Set} from 'immutable';
import _ from 'lodash'

const initialState = {
  selectedTab: "RealNewsFeed",
};

const traianApp = (state, action) => {
  if (typeof state == 'undefined') {
    return Map(initialState);
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

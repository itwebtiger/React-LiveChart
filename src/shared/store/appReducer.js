import appActionTypes from './appActionTypes';
import appInitialState from './appInitialState';

const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case appActionTypes.SET_CHART_DATA:
      return state.set('chartData', action.data);
    default:
      return state;
  }
};

export default appReducer;

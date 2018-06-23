import appActionTypes from './appActionTypes';
import appInitialState from './appInitialState';
import setPromiseState from '../utilities/promiseState';

const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case appActionTypes.SET_DATA:
      return state.set('chartData', action.data);
    case appActionTypes.DELTA_PROMISE.fulfilled:
      return state.setIn(
        ['promise', 'updateChart'],
        setPromiseState(false, true, false)
      );

    case appActionTypes.DELTA_PROMISE.pending:
      return state.setIn(
        ['promise', 'updateChart'],
        setPromiseState(true, false, false)
      );

    case appActionTypes.DELTA_PROMISE.rejected:
      return state.setIn(
        ['promise', 'updateChart'],
        setPromiseState(false, false, true)
      );
    default:
      return state;
  }
};

export default appReducer;

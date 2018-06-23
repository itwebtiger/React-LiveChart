import { combineReducers } from 'redux';
import appReducer from './shared/store/appReducer';

const liveChartApp = combineReducers({
  chartApp: appReducer
});

export default liveChartApp;

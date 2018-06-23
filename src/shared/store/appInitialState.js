import seamlessImmutable from 'seamless-immutable';
import data from '../../mock/lastMonthDump';

const appInitialState = seamlessImmutable({
  chartData: data
});

export default appInitialState;

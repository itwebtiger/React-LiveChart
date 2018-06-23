import seamlessImmutable from 'seamless-immutable';
import data from '../../mock/legacyDataDump';
import setPromiseState from '../utilities/promiseState';

const appInitialState = seamlessImmutable({
  chartData: data,
  promise: {
    updateChart: setPromiseState()
  }
});

export default appInitialState;

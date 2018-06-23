import seamlessImmutable from 'seamless-immutable';
import data from '../../mock/legacyDataDump';

const appInitialState = seamlessImmutable({
  chartData: data
});

export default appInitialState;

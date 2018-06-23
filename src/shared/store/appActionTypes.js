const appActionTypes = {
  SET_DATA: 'SET_DATA',
  UPDATE_DATA_WITH_DELTA: 'UPDATE_DATA_WITH_DELTA',
  UPDATE_DATA_WITH_FULL_PAYLOAD: 'UPDATE_DATA_WITH_FULL_PAYLOAD',
  DELTA_PROMISE: {
    pending: 'chart/DELTA_PROMISE/pending',
    fulfilled: 'chart/DELTA_PROMISE/fulfilled',
    rejected: 'chart/DELTA_PROMISE/rejected'
  }
};

export default appActionTypes;

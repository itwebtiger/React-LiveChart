import appActionTypes from './appActionTypes';

const setData = data => {
  return {
    type: appActionTypes.SET_DATA,
    data
  };
};

const deltaUpdatePending = () => {
  return {
    type: appActionTypes.DELTA_PROMISE.pending
  };
};

const deltaUpdateFulfilled = () => {
  return {
    type: appActionTypes.DELTA_PROMISE.fulfilled
  };
};

const deltaUpdateRejected = () => {
  return {
    type: appActionTypes.DELTA_PROMISE.rejected
  };
};

export {
  setData,
  deltaUpdatePending,
  deltaUpdateFulfilled,
  deltaUpdateRejected
};

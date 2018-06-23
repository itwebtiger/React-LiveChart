import appActionTypes from './appActionTypes';

const setData = data => {
  return {
    type: appActionTypes.SET_DATA,
    data
  };
};

export { setData };

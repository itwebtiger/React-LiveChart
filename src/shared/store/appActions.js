import appActionTypes from './appActionTypes';
import _ from 'lodash';

const setChartData = data => {
  return {
    type: appActionTypes.SET_CHART_DATA,
    data
  };
};

const updateChartData = payload => {
  return dispatch => {
    dispatch(parseDeltaAndUpdate(payload));
  };
};

const parseDeltaAndUpdate = payload => {
  return (dispatch, getState) => {
    let currentData = getState().chartApp.chartData;
    const data = getParsedChartData(currentData, payload);
    dispatch(setChartData(data));
  };
};

const getParsedChartData = (currentData, payload) => {
  const updatedChartData = currentData.asMutable({ deep: true });

  payload.forEach(data => {
    let index = _.findIndex(updatedChartData, {
      key: { segmentNumber: data.key.segmentNumber }
    });
    if (index !== -1) {
      updatedChartData.splice(index, 1, data);
    } else {
      updatedChartData.push(data);
    }
  });

  return updatedChartData;
};

export { setChartData, updateChartData };

import { deltaUpdatePending, setData } from '../../../shared/store/appActions';
import deltaData from '../../../mock/deltaDump';
import _ from 'lodash';

const getParsedChartData = currentData => {
  const updatedChartData = currentData.asMutable({ deep: true });

  deltaData.forEach(delta => {
    delta.forEach(data => {
      let index = _.findIndex(updatedChartData, {
        key: { segmentNumber: data.key.segmentNumber }
      });
      if (index !== -1) {
        updatedChartData.splice(index, 1, data);
      } else {
        updatedChartData.push(data);
      }
    });
  });

  return updatedChartData;
};

const parseDelta = () => {
  return (dispatch, getState) => {
    let currentData = getState().chartApp.chartData;
    const config = getParsedChartData(currentData);
    dispatch(setData(config));
  };
};

const updateChartDataWithDelta = () => {
  return dispatch => {
    dispatch(deltaUpdatePending());
    dispatch(parseDelta());
  };
};

export { updateChartDataWithDelta };

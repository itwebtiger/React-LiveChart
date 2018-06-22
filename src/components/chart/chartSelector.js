import { createSelector } from 'reselect';
import moment from 'moment';

const getChartData = ownProps => {
  return ownProps.data;
};

const processChartData = chartData => {
  return chartData.map(chart => {
    return {
      segmentNumber: chart.key.segmentNumber,
      dayTimestamp: moment(chart.key.dayTimestamp * 1000).format('DD MMM'),
      timestamp: chart.key.timestamp,
      totalCallsAdded: chart.totalCallsAdded,
      totalCallsRemoved: -chart.totalCallsRemoved,
      segmentSize: chart.segmentSize
    };
  });
};

const chartSelector = createSelector([getChartData], processChartData);

export { chartSelector };

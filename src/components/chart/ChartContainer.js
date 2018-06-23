import { connect } from 'react-redux';
import ChartComponent from './ChartComponent';
import { chartSelector } from './chartSelector';

const mapStateToProps = state => {
  return {
    chartData: chartSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ChartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartComponent);

export default ChartContainer;

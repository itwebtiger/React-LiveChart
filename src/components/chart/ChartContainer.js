import { connect } from 'react-redux';
import ChartComponent from './ChartComponent';
import { chartSelector } from './chartSelector';

const mapStateToProps = (state, ownProps) => {
  return {
    chartData: chartSelector(ownProps)
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

import { connect } from 'react-redux';
import SideNav from './SideNav';
import { setData } from '../../../shared/store/appActions';
import { updateChartDataWithDelta } from './sideNavActions';

const mapStateToProps = state => {
  return {
    data: state.chartApp.chartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: data => {
      dispatch(setData(data));
    },
    updateChartDataWithDelta: currentData => {
      dispatch(updateChartDataWithDelta(currentData));
    }
  };
};

const SideNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);

export default SideNavContainer;

import { connect } from 'react-redux';
import SideNav from './SideNav';
import { setChartData, updateChartData } from '../../shared/store/appActions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setData: data => {
      dispatch(setChartData(data));
    },
    updateChartDataWithDelta: payload => {
      dispatch(updateChartData(payload));
    }
  };
};

const SideNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);

export default SideNavContainer;

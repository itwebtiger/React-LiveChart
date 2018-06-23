import { connect } from 'react-redux';
import SideNav from './SideNav';
import { setChartData, updateChartData } from '../../shared/store/appActions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setChartData: data => {
      dispatch(setChartData(data));
    },
    updateChartData: payload => {
      dispatch(updateChartData(payload));
    }
  };
};

const SideNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);

export default SideNavContainer;

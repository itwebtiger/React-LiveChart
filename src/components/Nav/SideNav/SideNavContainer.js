import { connect } from 'react-redux';
import SideNav from './SideNav';
import { setData } from '../../../shared/store/appActions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setData: data => {
      dispatch(setData(data));
    }
  };
};

const SideNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);

export default SideNavContainer;

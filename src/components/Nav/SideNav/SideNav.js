import React from 'react';
import './sideNav.css';
import PropTypes from 'prop-types';
import data from '../../../mock/legacyDataDump';
import currentData from '../../../mock/currentMonthDump';

const SideNav = props => {
  return (
    <div className="sideNav">
      <button className="toggleButton" onClick={() => props.setData(data)}>
        Last Month
      </button>
      <button
        className="toggleButton"
        onClick={() => props.setData(currentData)}
      >
        This Month
      </button>
      <button
        className="toggleButton"
        onClick={() => props.updateChartDataWithDelta(data)}
      >
        Live Delta
      </button>
      <button className="toggleButton">Live Reload</button>
    </div>
  );
};

SideNav.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func,
  updateChartDataWithDelta: PropTypes.func
};

export default SideNav;

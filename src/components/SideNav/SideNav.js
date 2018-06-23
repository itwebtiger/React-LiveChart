import React from 'react';
import './sideNav.css';
import PropTypes from 'prop-types';
import legacyData from '../../mock/lastMonthDump';
import currentData from '../../mock/currentMonthDump';
import delta from '../../mock/deltaDump';
import fullPayload from '../../mock/fullPayloadDump';

const SideNav = props => {
  return (
    <div className="sideNav">
      <button
        className="toggleButton"
        onClick={() => props.setChartData(legacyData)}
      >
        Last Month
      </button>
      <button
        className="toggleButton"
        onClick={() => props.setChartData(currentData)}
      >
        This Month
      </button>
      <button
        className="toggleButton"
        onClick={() => props.updateChartData(delta)}
      >
        Delta
      </button>
      <button
        className="toggleButton"
        onClick={() => props.updateChartData(fullPayload)}
      >
        Full Payload
      </button>
    </div>
  );
};

SideNav.propTypes = {
  setChartData: PropTypes.func,
  updateChartData: PropTypes.func
};

export default SideNav;

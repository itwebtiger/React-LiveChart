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
        onClick={() => props.setData(legacyData)}
      >
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
        onClick={() => props.updateChartDataWithDelta(delta)}
      >
        Delta
      </button>
      <button
        className="toggleButton"
        onClick={() => props.updateChartDataWithDelta(fullPayload)}
      >
        Full Payload
      </button>
    </div>
  );
};

SideNav.propTypes = {
  setData: PropTypes.func,
  updateChartDataWithDelta: PropTypes.func
};

export default SideNav;

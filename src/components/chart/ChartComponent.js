import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import './chart.css';

class ChartComponent extends Component {
  render() {
    return (
      <div className="chartContainer">
        <ComposedChart
          width={1200}
          height={500}
          data={this.props.chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <XAxis dataKey="dayTimestamp" />
          <YAxis
            label={{
              value: 'Change in segment',
              angle: -90,
              position: 'insideLeft',
              textAnchor: 'middle'
            }}
          />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar name="Added" dataKey="totalCallsAdded" fill="#8884D8" />
          <Bar name="Removed" dataKey="totalCallsRemoved" fill="#CCCCCC" />
          <Line
            name="Selection size"
            connectNulls={true}
            type="monotone"
            dataKey="segmentSize"
            stroke="#1976D2"
          />
        </ComposedChart>
      </div>
    );
  }
}

ChartComponent.propTypes = {
  chartData: PropTypes.array
};

export default ChartComponent;

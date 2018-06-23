import React from 'react';
import { shallow } from 'enzyme';

import ChartComponent from './ChartComponent';
import appInitialState from '../../shared/store/appInitialState';

describe('<ChartComponent/>', () => {
  const props = {
    chartData: appInitialState.chartData
  };

  it('renders the ChartComponent Component', () => {
    const component = shallow(<ChartComponent {...props} />);
    expect(component.hasClass('chartContainer')).toBeTruthy();

    const chartComponent = component.find('.chartContainer');

    const responsiveContainer = chartComponent.find('ResponsiveContainer');
    expect(responsiveContainer.length).toBe(1);

    const composedChart = responsiveContainer.find('ComposedChart');
    expect(composedChart.length).toBe(1);
    expect(composedChart.props().data).toEqual(props.chartData);

    const cartesianGrid = composedChart.find('CartesianGrid');
    expect(composedChart.find('CartesianGrid').length).toBe(1);
    expect(composedChart.find('XAxis').length).toBe(1);
    expect(composedChart.find('YAxis').length).toBe(1);
    expect(composedChart.find('Tooltip').length).toBe(1);
    expect(composedChart.find('ReferenceLine').length).toBe(1);
    expect(composedChart.find('Bar').length).toBe(2);
    expect(composedChart.find('Line').length).toBe(1);
  });
});

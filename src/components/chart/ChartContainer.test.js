import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';

jest.mock('./ChartComponent');
jest.mock('./chartSelector');

import ChartContainer from './ChartContainer';
import ChartComponent from './ChartComponent';
import { chartSelector } from './chartSelector';
import seamlessImmutable from 'seamless-immutable';

describe('<ChartContainer />', () => {
  const state = seamlessImmutable({
    chartApp: {
      chartData: [
        {
          key: {
            segmentNumber: 115,
            dayTimestamp: 1529040645,
            timestamp: 1529040645
          },
          totalCallsAdded: 6,
          totalCallsRemoved: 10,
          segmentSize: 20
        }
      ]
    }
  });

  const chartData = [
    {
      segmentNumber: 115,
      dayTimestamp: '15 Jun',
      timestamp: 1529040645,
      totalCallsAdded: 6,
      totalCallsRemoved: -10,
      segmentSize: 20
    }
  ];

  const store = configureMockStore()(state);

  let container, component, componentProps;

  beforeEach(() => {
    spyOn(store, 'dispatch');

    chartSelector.mockImplementation(() => {
      return chartData;
    });

    ChartComponent.mockImplementation(() => {
      return {
        render() {
          return <div />;
        }
      };
    });

    const wrapper = mount(
      <Provider store={store}>
        <ChartContainer />
      </Provider>
    );

    container = wrapper.find(ChartContainer);
    component = wrapper.find('ChartComponent');

    componentProps = component.props();
  });

  it('renders the chart component', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  describe('mapStateToProps', () => {
    it('sets the state props on the chart component', () => {
      expect(componentProps.chartData).toEqual(chartData);
    });
  });
});

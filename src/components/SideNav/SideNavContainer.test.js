import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SideNav from './SideNav';
import SideNavContainer from './SideNavContainer';
import appActionTypes from '../../shared/store/appActionTypes';
import * as appActions from '../../shared/store/appActions';

jest.mock('./SideNav');

describe('<SideNavContainer />', () => {
  const state = {};
  const store = configureMockStore()(state);
  const data = [
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
  ];

  let container, component, componentProps;

  beforeEach(() => {
    spyOn(store, 'dispatch');
    spyOn(appActions, 'setChartData').and.returnValue({
      type: appActionTypes.SET_CHART_DATA
    });
    spyOn(appActions, 'updateChartData').and.returnValue({
      type: appActionTypes.SET_CHART_DATA
    });

    SideNav.mockImplementation(() => {
      return {
        render() {
          return <div />;
        }
      };
    });

    const wrapper = mount(
      <Provider store={store}>
        <SideNavContainer />
      </Provider>
    );

    container = wrapper.find(SideNavContainer);
    component = wrapper.find('SideNav');
    componentProps = component.props();
  });

  it('renders the SideNavContainer', () => {
    expect(container.length).toBe(1);
    expect(component.length).toBe(1);
  });

  describe('mapDispatchToProps', () => {
    it('calls setChartData', () => {
      componentProps.setChartData(data);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: appActionTypes.SET_CHART_DATA
      });
    });
    it('calls updateChartData', () => {
      componentProps.updateChartData(data);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: appActionTypes.SET_CHART_DATA
      });
    });
  });
});

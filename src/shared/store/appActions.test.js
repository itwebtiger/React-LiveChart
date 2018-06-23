import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import appActionTypes from './appActionTypes';
import { setChartData } from './appActions';
import appInitialState from './appInitialState';

let state, store;

describe('appActions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  beforeEach(() => {
    state = {
      chartApp: {
        chartData: appInitialState.chartData
      }
    };
    store = mockStore(state);
  });

  it(`Should set chart data on ${appActionTypes.SET_CHART_DATA} action`, () => {
    const data = [
      {
        key: {
          segmentNumber: 1,
          dayTimestamp: 1527831045,
          timestamp: 1527831045
        },
        totalCallsAdded: 20,
        totalCallsRemoved: 18,
        segmentSize: 10
      }
    ];
    const expectedActions = [
      {
        type: appActionTypes.SET_CHART_DATA,
        data
      }
    ];

    store.dispatch(setChartData(data));

    expect(store.getActions()).toEqual(expectedActions);
  });
});

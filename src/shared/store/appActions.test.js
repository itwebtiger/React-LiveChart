import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import immutable from 'seamless-immutable';

import appActionTypes from './appActionTypes';
import {
  getParsedChartData,
  setChartData,
  updateChartData
} from './appActions';

let state, store;

describe('appActions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  beforeEach(() => {
    state = immutable({
      chartApp: {
        chartData: [
          {
            key: {
              segmentNumber: 11,
              dayTimestamp: 1527831045,
              timestamp: 1527831045
            },
            totalCallsAdded: 20,
            totalCallsRemoved: 18,
            segmentSize: 10
          },
          {
            key: {
              segmentNumber: 12,
              dayTimestamp: 1527917445,
              timestamp: 1527917445
            },
            totalCallsAdded: 30,
            totalCallsRemoved: 30
          }
        ]
      }
    });
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

  it(`test updating existing chart data with new delta value`, () => {
    const payload = [
      {
        key: {
          segmentNumber: 12,
          dayTimestamp: 1527917445,
          timestamp: 1527917445
        },
        totalCallsAdded: 35,
        totalCallsRemoved: 32,
        segmentSize: 2
      },
      {
        key: {
          segmentNumber: 13,
          dayTimestamp: 1528003845,
          timestamp: 1528003845
        },
        totalCallsAdded: 35,
        totalCallsRemoved: 35
      }
    ];

    const parsedData = [
      {
        key: {
          segmentNumber: 11,
          dayTimestamp: 1527831045,
          timestamp: 1527831045
        },
        totalCallsAdded: 20,
        totalCallsRemoved: 18,
        segmentSize: 10
      },
      {
        key: {
          segmentNumber: 12,
          dayTimestamp: 1527917445,
          timestamp: 1527917445
        },
        totalCallsAdded: 35,
        totalCallsRemoved: 32,
        segmentSize: 2
      },
      {
        key: {
          segmentNumber: 13,
          dayTimestamp: 1528003845,
          timestamp: 1528003845
        },
        totalCallsAdded: 35,
        totalCallsRemoved: 35
      }
    ];

    const expectedActions = [
      {
        type: appActionTypes.SET_CHART_DATA,
        data: parsedData
      }
    ];

    store.dispatch(updateChartData(payload));

    expect(store.getActions()).toEqual(expectedActions);
  });
});

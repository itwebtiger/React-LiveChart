import appActionTypes from './appActionTypes';
import appReducer from './appReducer';
import appInitialState from './appInitialState';

describe('appReducer', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(appInitialState);
  });

  it(`should handle ${appActionTypes.SET_CHART_DATA}`, () => {
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

    const expectedState = {
      chartData: data
    };
    const action = {
      type: appActionTypes.SET_CHART_DATA,
      data
    };
    const reducerOutput = appReducer(appInitialState, action);

    expect(reducerOutput).toEqual(expectedState);
  });
});

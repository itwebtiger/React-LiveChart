import seamlessImmutable from 'seamless-immutable';
import { chartSelector } from './chartSelector';

describe('chartSelector', () => {
  it('chartSelector - returns structured data for chart component to render', () => {
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
    expect(chartSelector(state)).toEqual([
      {
        segmentNumber: 115,
        dayTimestamp: '15 Jun',
        timestamp: 1529040645,
        totalCallsAdded: 6,
        totalCallsRemoved: -10,
        segmentSize: 20
      }
    ]);
  });
});

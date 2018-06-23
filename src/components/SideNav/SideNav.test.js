import React from 'react';
import { shallow } from 'enzyme';

import SideNav from './SideNav';
import PropTypes from 'prop-types';

describe('<SideNav/>', () => {
  it('renders the SideNav Component', () => {
    const updateChartDataMock = jest.fn();
    const setChartDataMock = jest.fn();

    const props = {
      setChartData: setChartDataMock,
      updateChartData: updateChartDataMock
    };

    const component = shallow(<SideNav {...props} />);
    expect(component.hasClass('sideNav')).toBeTruthy();

    const sideNavComponent = component.find('.sideNav');

    const buttons = sideNavComponent.find('button');
    expect(buttons.length).toBe(4);

    expect(buttons.at(0).props().className).toBe('toggleButton');
    expect(buttons.at(0).props().children).toBe('Last Month');
    buttons
      .at(0)
      .props()
      .onClick();
    expect(setChartDataMock).toHaveBeenCalled();

    expect(buttons.at(1).props().className).toBe('toggleButton');
    expect(buttons.at(1).props().children).toBe('This Month');
    buttons
      .at(1)
      .props()
      .onClick();
    expect(setChartDataMock).toHaveBeenCalled();

    expect(buttons.at(2).props().className).toBe('toggleButton');
    expect(buttons.at(2).props().children).toBe('Delta');
    buttons
      .at(2)
      .props()
      .onClick();
    expect(updateChartDataMock).toHaveBeenCalled();

    expect(buttons.at(3).props().className).toBe('toggleButton');
    expect(buttons.at(3).props().children).toBe('Full Payload');
    buttons
      .at(3)
      .props()
      .onClick();
    expect(updateChartDataMock).toHaveBeenCalled();
  });
});

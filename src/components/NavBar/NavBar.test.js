import React from 'react';
import { shallow } from 'enzyme';

import NavBar from './NavBar';

describe('<NavBar/>', () => {
  it('renders the NavBar Component', () => {
    const component = shallow(<NavBar />);
    expect(component.hasClass('navBar')).toBeTruthy();

    const navBarComponent = component.find('.navBar');

    const appHeader = navBarComponent.find('header');
    expect(appHeader.length).toBe(1);
    expect(appHeader.props().className).toBe('appHeader');
    expect(appHeader.find('p').props().children).toBe('Chart');
  });
});

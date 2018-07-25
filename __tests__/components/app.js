import React from 'react';
import { shallow, } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';


import App from '../../src/view/App.jsx';
import Login from '../../src/view/loginform';

const mockStore = configureStore();
const initialState = {
  posts: [{
    id: '0',
    title: 'Hello',
    body: 'Welcome back!',
  },
  {
    id: '2',
    title: 'Hello2',
    body: 'Welcome back!2',
  }]
};
const store = mockStore(initialState)

describe('App test suite', () => {
  test('mocked store for App', () => {
    const props = { match: { params: 1 } };
    const wrapper = shallow(<App store={store} {...props} />);
    const component = wrapper.dive();
    const login = component.find('Login');

    expect(login).toEqual({ length: 1 });
    expect(store.getActions()).toMatchSnapshot();
  });


  test('Login onClick()', () => {
    const mockOnClick = jest.fn();
    const event = new Event('mock');
    const wrapper = shallow(
      <Login validationCallback={mockOnClick} label="Eat Food" />
    );
    wrapper.instance().login = { value: 'bla' };
    wrapper.instance().pass = { value: 'bla' };
    wrapper.update();
    wrapper.instance().handleSubmit(event);

    wrapper.find('button').simulate('click');

    expect(mockOnClick.mock.calls.length).toEqual(1);
    expect(wrapper.find('label').hasClass('warning')).toBe(true);
  });


  test('renders login with warning', () => {
    const props = { validationCallback: jest.fn(), warning: true };

    const wrapper = shallow(<Login {...props} />);

    expect(wrapper.find('div').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe('Welcome');
    expect(wrapper.find('label').hasClass('warning enabled')).toBe(true);
  });

});


import React from 'react';
import onlyWithAuthedUser from './onlyWithAuthedUser';
import Login from './Login';
import { shallow } from 'enzyme';

const mockedProps = {
  id: 1,
  name: 'Joe',
};
const TestComponent = (mockedProps) => {
  return (
    <div>
      <span>{mockedProps.name}</span>
    </div>
  );
};

describe('withAuthedUser HOC', () => {
  describe('when user is Authorized with proper data', () => {
    const mockedStore = {
      user: {
        email: 'test@test.com',
        password: 'test123',
      },
      isAuthed: true,
    };
    const WithAuthedUserComponent = onlyWithAuthedUser(
      TestComponent,
      mockedStore
    );
    const wrapper = shallow(<WithAuthedUserComponent {...mockedProps} />);

    it('renders properly', () => {
      expect(wrapper.find(TestComponent).exists()).toBe(true);
    });
    it('passes all props to wrapped component', () => {
      expect(wrapper.find(TestComponent).props()).toEqual(mockedProps);
    });
  });
  describe('when user is not authorized', () => {
    const mockedStore = {
      user: {
        email: '',
        password: '',
      },
      isAuthed: false,
    };
    const WithAuthedUserComponent = onlyWithAuthedUser(
      TestComponent,
      mockedStore
    );
    const wrapper = shallow(<WithAuthedUserComponent {...mockedProps} />);

    it('renders Login component', () => {
      expect(wrapper.find(Login).exists()).toBe(true);
    });
  });
  describe('when store has invalid structure', () => {
    const mockedStore = {
      user: {
        email: '',
      },
      isAuthed: false,
    };
    const WithAuthedUserComponent = onlyWithAuthedUser(
      TestComponent,
      mockedStore
    );
    const wrapper = shallow(<WithAuthedUserComponent {...mockedProps} />);

    it('renders store error information', () => {
      expect(wrapper.find('.warning').text()).toEqual(
        `Invalid store data format in component: ${TestComponent.name}`
      );
    });
  });
});

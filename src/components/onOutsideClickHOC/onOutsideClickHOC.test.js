import React from 'react';
import onOutsideClickHOC from './onOutsideClickHOC';
import { TestComponent, mockedProps } from '../../mocks';
import { shallow, mount } from 'enzyme';

describe('outside click HOC', () => {
  const WrappedComponent = onOutsideClickHOC(TestComponent);
  const wrapper = shallow(<WrappedComponent {...mockedProps} />);
  it('renders wrapped component properly', () => {
    expect(wrapper.find(TestComponent).exists()).toBe(true);
  });
  it('passes all props to wrapped component', () => {
    expect(wrapper.find(TestComponent).props()).toEqual(mockedProps);
  });

  describe('when clicked on wrapped component', () => {
    const wrapper = mount(<WrappedComponent {...mockedProps} />);

    it('adds backdrop behind component', () => {
      wrapper.find(TestComponent).simulate('click');
      wrapper.update();
      expect(wrapper.find('#backdrop').hasClass('backDrop-on')).toBe(true);
    });

    it('adds a class with proper zindex to wrapped component', () => {
      expect(wrapper.find('.container').hasClass('withBackDrop')).toBe(true);
    });

    describe('and when clicked outside component', () => {
      it('removes backdrop behind component', () => {
        wrapper.find('#backdrop').simulate('click');
        wrapper.update();
        expect(wrapper.find('#backdrop').hasClass('backDrop-off')).toBe(true);
      });

      it('removes a class with higger zindex from wrapped component', () => {
        expect(wrapper.find('.container').hasClass('withBackDrop')).toBe(false);
      });
    });
  });
});

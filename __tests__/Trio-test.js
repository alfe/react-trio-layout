import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount, render } from 'enzyme';
import Trio from '../src/Trio';

describe('<Trio />', () => {
  describe('component spec', () => {
    let subject;
    beforeEach(() => {
      subject = <Trio shift={false}><div>1</div><div/><div/></Trio>;
    });

    it('should render without throwing an error', () => {
      expect(shallow(subject).contains(<div>1</div>)).toBe(true);
    });

    it('should render to static HTML', () => {
      expect(render(subject).text()).toEqual('1');
    });
  });
});

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import { configure } from 'enzyme';
import Tab from '../../components/tab';
import { Text } from 'react-native';

configure({ adapter: new Adapter() });

describe('Components | Tab', function() {
  describe('when content is react element', function() {
    it('renders content', function() {
      const component = (
        <Tab
          allowFontScaling
          content={<Text>hi</Text>}
          tabWidth={100}
          tabHeight={100}
          stretch={false}
          activeTextColor={'red'}
          inActiveTextColor={'green'}
          textStyle={false}
          uppercase
        />
      );
      const tree = create(component).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('when content is string', function() {
    it('renders text tab', function() {
      const component = (
        <Tab
          allowFontScaling
          content={'text'}
          tabWidth={100}
          tabHeight={100}
          stretch={false}
          activeTextColor={'red'}
          inActiveTextColor={'green'}
          textStyle={false}
          uppercase
        />
      );
      const tree = create(component).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

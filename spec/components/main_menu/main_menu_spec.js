import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MainMenu from '../../../src/scripts/components/main_menu/main_menu.js'

describe('MainMenu', () => {
  let subject;

  beforeEach(() => {
    subject = TestUtils.renderIntoDocument(<MainMenu/>);
  });

  it('shows hello world', () => {
    let content = TestUtils.findRenderedDOMComponentWithClass(subject, 'main-menu');
    expect(content.innerText).toContain('Hello foo World')
  });
});
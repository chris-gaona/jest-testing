import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  let wrapper = null
  beforeAll(() => {
    wrapper = shallow(<App />, { context: {}, disableLifecycleMethods: false })
  })

  it.skip('should render App', () => {
    console.log(wrapper.debug())
  });
  
  it('should contain 1 p element', () => {
    expect(wrapper.find('p').length).toBe(1)
    expect(wrapper.find('p').exists()).toBe(true)
    expect(wrapper.find('.paragraph').exists()).toBe(true)
  });

  it('should contain ul & li elements', () => {
    expect(wrapper.find('ul').children().length).toBe(3)
    expect(wrapper.find('ul').hasClass('unordered-list')).toBe(true)
  });

  it('should have an h1 with text', () => {
    expect(wrapper.find('h1').text()).toBe('Welcome to React')
  });
});
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

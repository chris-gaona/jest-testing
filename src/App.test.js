import React from 'react';
import ReactDOM from 'react-dom';
import { App, Link } from './App';
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('<App /> shallow rendering', () => {
  let wrapper = null
  beforeAll(() => {
    wrapper = shallow(<App />, { context: {}, disableLifecycleMethods: false })
  })

  it.skip('should render App', () => {
    console.log(wrapper.debug())
  });
  
  it('should contain 1 p element', () => {
    expect(wrapper.find('p').length).toBe(2)
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

  it('should render a Title component with the correct text', () => {
    expect(wrapper.find('[text="some title"]').exists()).toBe(true)
  });

  it('should render an image with alt of logo', () => {
    expect(wrapper.find({alt: 'logo'}).exists()).toBe(true)
  });

  it('should match the snapshot', () => {
    const tree = shallow(<App />)
    expect(toJson(tree)).toMatchSnapshot()
  });

  it('should update the className with new state', () => {
    expect(wrapper.find('.blue').length).toBe(1)
    expect(wrapper.find('.red').length).toBe(0)
    // wrapper.setState({ mainColor: 'red' }) // Can only use this inside a class component
    wrapper.find('.blue').simulate('click')
    expect(wrapper.find('.blue').length).toBe(0)
    expect(wrapper.find('.red').length).toBe(1)
  });

  it('should change the p text on button click', () => {
    const button = wrapper.find('button')
    expect(wrapper.find('.button-state').text()).toBe('No!')
    button.simulate('click')
    expect(wrapper.find('.button-state').text()).toBe('Yes!')
  });

  it('should change the title text on input change', () => {
    const input = wrapper.find('input')
    expect(wrapper.find('h2').text()).toBe('')
    input.simulate('change', {currentTarget: {value: 'Chris'}})
    expect(wrapper.find('h2').text()).toBe('Chris')
  });

  // Test a lifecycle hook with jest
  // it('should call componentDidMount', () => {
  //   jest.spyOn(App.prototype, 'componentDidMount')
  //   expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
  // });

  // it('should call setProps to call componentWillReceiveProps', () => {
  //   jest.spyOn(App.prototype, 'componentWillReceiveProps')
  //   wrapper.setProps({ hide: true })
  //   expect(App.prototype.componentWillReceiveProps.mock.calls.length).toBe(1)
  // });
});

describe('<App /> mount rendering', () => {
  it('should contain an h1 with correct text', () => {
    // const wrapper = mount(<App />, { context: {}, attachTo: DOMElement})
    const wrapper = mount(<App />)
    expect(wrapper.find('h1').text()).toBe('Welcome to React')
    wrapper.unmount()
  });

  // mount snapshot testing results are a little different than shallow snapshot results
  // so tests will fail if you switch them
  it('should match the snapshot', () => {
    const tree = mount(<App />)
    expect(toJson(tree)).toMatchSnapshot()
    tree.unmount()
  });
});

describe('<Link />', () => {
  it('should create a link component that accepts an address prop', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.instance().props.address).toBe('www.google.com')
  });

  it('should render an a tag node href correctly', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.props().href).toBe('www.google.com')
  });

  it('should return null with true hide prop', () => {
    const wrapper = shallow(<Link hide={false} />)
    expect(wrapper.find('a').length).toBe(1)
    wrapper.setProps({hide: true})
    expect(wrapper.get(0)).toBeNull()
  });
});
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

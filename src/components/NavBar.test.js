import NavBar from './NavBar';
import { shallow } from 'enzyme';
describe('NavBar', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavBar/>)
    });
    test('it renders', () => {
        expect(wrapper.find('nav')).toHaveLength(1);
    });
    test('has 3 NavLinks', () => {
        expect(wrapper.find('NavLink')).toHaveLength(3);
    });
});
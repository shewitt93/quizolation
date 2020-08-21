import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import InputPage from './InputPage';
import renderer from 'react-test-renderer';
describe('<Form />', () => {
    it('should render a form', () => {
        const wrapper = shallow(<InputPage />); 
        expect(wrapper.exists('form')).toEqual(true);
    })
    it('should have 3 select options', () => {
        const wrapper = shallow(<InputPage />); 
        expect(wrapper.find('select').length).toEqual(2);
    })
});
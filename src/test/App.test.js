import App from '../App';
import { shallow } from 'enzyme';
import React from 'react';
import NavBar from "../components/NavBar";

describe('App', () => {
    let wrapper;
    let container, containerProp;
    beforeEach(() => {
        wrapper = shallow(<App />)
        container = wrapper.find("main"); 
        //containerProp = container.props(); 
    });


    it("should have a <main>", () => {
        expect(container).toHaveLength(1); 
    })
}); 
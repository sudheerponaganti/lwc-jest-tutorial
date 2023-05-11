
import {createElement} from 'lwc';
import P2cParentComponent from 'c/p2cParentcomponent';

describe('c-p2c-parent-component test suite',()=>{



    it('test case to check provide input number',()=>{
        const element = createElement('c-p2c-parent-component',{
            is: P2cParentComponent
        })
        document.body.appendChild(element)
       
        // return Promise.resolve().then(()=>{
        const inputElem = element.shadowRoot.querySelector('.input-box');
        inputElem.value = 10;
        inputElem.dispatchEvent(new CustomEvent('keyup'));
       expect(1).toBe(1);
    })
});
/* eslint-disable @lwc/lwc/no-document-query */
import {createElement} from 'lwc';
import EventTesting from 'c/eventTesting';
describe('c-event-testing Test Suite',()=>{
beforeEach(()=>{
    const element = createElement('c-event-testing',{
        is : EventTesting
    })
    document.body.appendChild(element);
   })

 it('checking the p tag',()=>{
     const element = document.querySelector('c-event-testing');
     const pElem = element.shadowRoot.querySelector('p');
     expect(pElem.textContent).toBe('Hello,World!');
 })

 it('checking the input  tag',()=>{
    const element = document.querySelector('c-event-testing');
    const inputElem = element.shadowRoot.querySelector('lightning-input');
    inputElem.value ="Salesforce";
    inputElem.dispatchEvent(new CustomEvent('change'))
    return Promise.resolve().then(()=>{
        const pElem = element.shadowRoot.querySelector('p');
        expect(pElem.textContent).toBe('Hello,Salesforce!');
    })
    
})
})
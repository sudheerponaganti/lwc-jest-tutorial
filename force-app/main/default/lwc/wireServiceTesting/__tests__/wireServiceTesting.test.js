/* eslint-disable @lwc/lwc/no-document-query */
import {createElement} from 'lwc';
import WireServiceTesting from 'c/wireServiceTesting';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import {registerApexTestWireAdapter} from '@salesforce/sfdx-lwc-jest';
const getContactListAdapter = registerApexTestWireAdapter(getContactList)
const mockContactList = require('./data/getContactList.json');
const mockContactNoRecord = require('./data/getContactlistNoRecord.Json');
describe('c-wire-service-testing Test suite',()=>{
    beforeEach(()=>{
        const element = createElement('c-wire-service-testing',{
            is:WireServiceTesting
        })
        document.body.appendChild(element);
    })

    afterEach(() => {
        while(document.body.firstChild) {
          document.body.removeChild(document.body.firstChild);
        }
      });

    it('checking Contacts data',()=>{
        const element = document.querySelector('c-wire-service-testing');
        getContactListAdapter.emit(mockContactList);
        return Promise.resolve().then(()=>{
            const pElem = element.shadowRoot.querySelectorAll('p');
            expect(pElem.length).toBe(mockContactList.length);
            expect(pElem[0].textContent).toBe(mockContactList[0].Name);
        })
    })
    it('checking the  No Record condition',()=>{
  const element = document.querySelector('c-wire-service-testing');
     getContactListAdapter.emit(mockContactNoRecord);
     return Promise.resolve().then(()=>{
        const pElem = element.shadowRoot.querySelectorAll('p');
        expect(pElem.length).toBe(mockContactNoRecord.length);  
     })
    })
    it('checking the error message',()=>{
        const element = document.querySelector('c-wire-service-testing');
        getContactListAdapter.error();
        return Promise.resolve().then(()=>{
            const errorElem = element.shadowRoot.querySelector('.error');
            expect(errorElem.textContent).not.toBeNull();  
         })
    })
})
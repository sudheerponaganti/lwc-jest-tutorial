/* eslint-disable no-undef */
/* eslint-disable @lwc/lwc/no-document-query */
import {createElement} from 'lwc';
import MyApexImperativeComp from 'c/myApexImperativeComp';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

const mockAccountData = require('./data/getAccountData.json');
const mockAccountError = require('./data/getAccountNoRecord.json');
//jest.mock(moduleName,factory,options)
jest.mock('@salesforce/apex/AccountController.getAccountList',
()=>({
    default :jest.fn()
}),
{virtual : true}
)
describe('c-my-apex-imperative-comp Test Suite',()=>{
    beforeEach(()=>{
        const element = createElement('c-my-apex-imperative-comp',{
            is : MyApexImperativeComp
        })
        document.body.appendChild(element)
    })
    it('checking the AccountData',()=>{
        getAccountList.mockResolvedValue(mockAccountData)
        const element = document.querySelector('c-my-apex-imperative-comp');
        const buttonElem = element.shadowRoot.querySelector('lightning-button');
        buttonElem.dispatchEvent(new CustomEvent('click'));
        return new Promise(setImmediate).then(()=>{
            const pElem = element.shadowRoot.querySelectorAll('p.accountName');
            expect(pElem.length).toBe(mockAccountData.length);
            expect(pElem[0].textContent).toBe(mockAccountData[0].Name);
        })
    })

    it('checking the No Record case',()=>{
        getAccountList.mockRejectedValue(mockAccountError);
        const element = document.querySelector('c-my-apex-imperative-comp');
        const buttonElem = element.shadowRoot.querySelector('lightning-button');
        buttonElem.dispatchEvent(new CustomEvent('click'));
        return new Promise(setImmediate).then(()=>{
            const errorElem = element.shadowRoot.querySelectorAll('p.error');
            expect(errorElem.textContent).not.toBeNull();
        })
    })
})

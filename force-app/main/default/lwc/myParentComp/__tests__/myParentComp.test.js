/* eslint-disable @lwc/lwc/no-document-query */
import {createElement} from 'lwc';
import MyParentComp from 'c/myParentComp';
describe('c-my-parent-comp test suite',()=>{
    beforeEach(()=>{
        const element = createElement('c-my-parent-comp',{
            is: MyParentComp
        })
        document.body.appendChild(element)
    })
    it('checking child comp rendered',()=>{
        const element = document.querySelector('c-my-parent-comp');
        const childElem = element.shadowRoot.querySelector('c-my-child-comp');
        //expect(childElem.length).toBe(1);
        expect(childElem.userDetail.Name).toBe('Sudheer')
    })
})
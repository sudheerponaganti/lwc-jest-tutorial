/* eslint-disable @lwc/lwc/no-document-query */
import {createElement} from 'lwc';
import MyChildComp from 'c/myChildComp';
const USER_DATA = {
    Name : 'Sudheer',
    Id : '1'
}
describe('c-my-child-comp Test Suite',()=>{
    it('checking the data in Child Comp',()=>{
        const element = createElement('c-my-child-comp',{
            is : MyChildComp
        })
        element.userDetail = USER_DATA;
        document.body.appendChild(element)
        const dataElem = element.shadowRoot.querySelector('div');
     expect(dataElem.textContent).toBe(USER_DATA.Name);
    })

    it('checking the error in Child Comp',()=>{
        const element = createElement('c-my-child-comp',{
            is : MyChildComp
        })
        document.body.appendChild(element)
        const errorElem = element.shadowRoot.querySelector('p');
     expect(errorElem.textContent).toBe('No User Data Available');
    })
})
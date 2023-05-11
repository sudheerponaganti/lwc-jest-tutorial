/* eslint-disable @lwc/lwc/no-document-query */
import {createElement} from 'lwc';
import IteratorLoopTesting from 'c/IteratorLoopTesting';
const itemList = ['Nikhil','Sudheer','Krishna'];
describe('c-iterator-loop-testing',()=>{
    beforeEach(()=>{
        const element = createElement('c-iterator-loop-testing',{
            is : IteratorLoopTesting
        })
        document.body.appendChild(element);
    })

    it('checking for For Each List',()=>{
 const element = document.querySelector('c-iterator-loop-testing');
 //const forEachElem = element.shadowRoot.querySelectorAll('.forEachList>li');
 const userDetail =  Array.from(element.shadowRoot.querySelectorAll('.forEachList>li'))
 const userList =  userDetail.map(li=>li.textContent);
 expect(userDetail.length).toBe(3);
 expect(userList).toEqual(itemList);
    })

    it('checking for IteratorList',()=>{
        const element = document.querySelector('c-iterator-loop-testing');
        const iterElem = element.shadowRoot.querySelectorAll('.iteratorList>li');
        const iterList = Array.from(element.shadowRoot.querySelectorAll('.iteratorList>li>div.mainList'));
        const iterArr = iterList.map(li=>li.textContent);
       expect(iterElem.length).toBe(3);
       const firstElem = element.shadowRoot.querySelector('.iteratorList>li:first-child>div:first-child')
       const lastElem  = element.shadowRoot.querySelector('.iteratorList>li:last-child>div:last-child')
       expect(firstElem.textContent).toBe('Start of list')
       expect(lastElem.textContent).toBe('End of list')
       expect(iterList.length).toBe(3)
       expect(iterArr).toEqual(itemList);
    })
})
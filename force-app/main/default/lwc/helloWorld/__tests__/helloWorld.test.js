import {createElement} from 'lwc';
import HelloWorld from 'c/helloWorld';


describe('c-hello-world test suite',()=>{
   beforeEach(()=>{
    const element = createElement('c-hello-world',{
        is:HelloWorld
    })
    document.body.appendChild(element);
   }) 
   afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while(document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

    it('checking hello World div elemnt',()=>{
        // eslint-disable-next-line @lwc/lwc/no-document-query
        const element = document.querySelector('c-hello-world');
        const firstElem = element.shadowRoot.querySelector('.first');
        expect(firstElem.textContent).toBe('Hello,World');
    })

    it('checking My  World div elemnt',()=>{
        // eslint-disable-next-line @lwc/lwc/no-document-query
        const element = document.querySelector('c-hello-world');
        const secondElem = element.shadowRoot.querySelector('.second');
        expect(secondElem.textContent).toBe('my,World');
    })
})

                     


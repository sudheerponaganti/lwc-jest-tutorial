
import {createElement} from 'lwc';
import ProgressBarExample from 'c/progressBarExample';
import { ShowToastEventName } from 'lightning/platformShowToastEvent';

describe('c-progress-bar-example test suite',()=>{



    it('test case to  provide input first name only and also submit handler else condition',()=>{
        const element = createElement('c-progress-bar-example',{
            is: ProgressBarExample
        })
        document.body.appendChild(element)
        const handler = jest.fn();
        element.addEventListener(ShowToastEventName, handler);

        // return Promise.resolve().then(()=>{
        const inputElem = element.shadowRoot.querySelector('.first-name');
        inputElem.value = 'test';
        inputElem.dispatchEvent(new CustomEvent('change'));
        return Promise.resolve().then(()=>{
         const progressElem = element.shadowRoot.querySelector('lightning-progress-bar');
         expect(progressElem.value).toBe(20);
         const submitElem = element.shadowRoot.querySelector('.submit');
        submitElem.dispatchEvent(new CustomEvent('click'));
        expect(handler).toHaveBeenCalled();
        expect(handler.mock.calls[0][0].detail.message).toBe('Some Fields are Empty . Please fill  and submit' );


    })
});

    it('test case to provide all inputs  and also submit handler if condition',()=>{
        const element = createElement('c-progress-bar-example',{
            is: ProgressBarExample
        })
        document.body.appendChild(element);
        const handler = jest.fn();
        element.addEventListener(ShowToastEventName, handler);
       
          // return Promise.resolve().then(()=>{
            const firstNameElem = element.shadowRoot.querySelector('.first-name');
            firstNameElem.value = 'test';
            firstNameElem.dispatchEvent(new CustomEvent('change'));

            const lastNameElem = element.shadowRoot.querySelector('.last-name');
            lastNameElem.value = 'jest';
            lastNameElem.dispatchEvent(new CustomEvent('change'));

            const birthDateElem = element.shadowRoot.querySelector('.birth-date');
            birthDateElem.value = '2023-05-01';
            birthDateElem.dispatchEvent(new CustomEvent('change'));

            const emailElem = element.shadowRoot.querySelector('.email');
            emailElem.value = 'test@mail.com';
            emailElem.dispatchEvent(new CustomEvent('change'));

            const phoneElem = element.shadowRoot.querySelector('.phone');
            phoneElem.value = "345987345";
            phoneElem.dispatchEvent(new CustomEvent('change'));

            return Promise.resolve().then(()=>{
             const progressElem = element.shadowRoot.querySelector('lightning-progress-bar');
             expect(progressElem.value).toBe(100);
             const submitElem = element.shadowRoot.querySelector('.submit');
            submitElem.dispatchEvent(new CustomEvent('click'));
            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].detail.message).toBe('The Form is submitted.Hurray!!' );
    })
});


it('test case to  provide input first name only and also reset handler',()=>{
    const element = createElement('c-progress-bar-example',{
        is: ProgressBarExample
    })
    document.body.appendChild(element);

    // return Promise.resolve().then(()=>{
    const inputElem = element.shadowRoot.querySelector('.first-name');
    inputElem.value = 'test';
    inputElem.dispatchEvent(new CustomEvent('change'));
    return Promise.resolve().then(()=>{
     const progressElem = element.shadowRoot.querySelector('lightning-progress-bar');
     expect(progressElem.value).toBe(20);
     const resetElem = element.shadowRoot.querySelector('.reset');
     resetElem.dispatchEvent(new CustomEvent('click'));
     return Promise.resolve().then(()=>{
      expect(progressElem.value).toBe(0); 
})
    });
});

it('test case to  provide  empty input first name only for change Handler else condition',()=>{
    const element = createElement('c-progress-bar-example',{
        is: ProgressBarExample
    })
    document.body.appendChild(element);

    // return Promise.resolve().then(()=>{
    const inputElem = element.shadowRoot.querySelector('.first-name');
    inputElem.value = '';
    inputElem.dispatchEvent(new CustomEvent('change'));
    return Promise.resolve().then(()=>{
     const progressElem = element.shadowRoot.querySelector('lightning-progress-bar');
     expect(progressElem.value).toBe(0);
    
    });
});


});
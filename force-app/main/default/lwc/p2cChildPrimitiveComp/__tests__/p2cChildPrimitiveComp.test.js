
import {createElement} from 'lwc';
import P2cChildPrimitiveComp from 'c/p2cChildPrimitiveComp';

describe('c-p2c-child-primitive-comp test suite',()=>{
   


    it('test case to check the name',()=>{
        const element = createElement('c-p2c-child-primitive-comp',{
            is: P2cChildPrimitiveComp
        })
        element.name = 'salesforce';
        document.body.appendChild(element)
       
        // return Promise.resolve().then(()=>{
        const nameElem = element.shadowRoot.querySelector('.nameClass');
        expect(nameElem.textContent).toBe('salesforce');
    })


    it('test case to check the carousel',()=>{
        const element = createElement('c-p2c-child-primitive-comp',{
            is: P2cChildPrimitiveComp
        })
        element.carouselDetails =  [{
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description :"First card description.",
            alternativeText : "First card accessible description."
        }];
        document.body.appendChild(element)
       
        // return Promise.resolve().then(()=>{
        const carouselElem = element.shadowRoot.querySelectorAll('lightning-carousel-image');
        expect(carouselElem.length).toBe(1);
    })
});
// })

it('test case to check the progressNumber',()=>{
    const element = createElement('c-p2c-child-primitive-comp',{
        is: P2cChildPrimitiveComp
    })
    element.progressNumber = 30;
    document.body.appendChild(element)
   
    // return Promise.resolve().then(()=>{
    const progressElem = element.shadowRoot.querySelector('lightning-progress-bar');
    expect(progressElem.value).toBe(30);
})
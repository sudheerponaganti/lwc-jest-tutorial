import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    progressValue=20;
     //named = this.template.querySelector('c-p2c-child-primitive-comp').name;
    carouselData=[
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description :"First card description.",
            alternativeText : "First card accessible description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description :"Second card description.",
            alternativeText : "Second card accessible description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description :"Third card description.",
            alternativeText : "Third card accessible description."
        }
    ]
    progressChangeHandler(event){
     this.progressValue= event.target.value;
    //  const named = this.template.querySelector('c-p2c-child-primitive-comp').name;
    //  console.log(named);
    }
    
}
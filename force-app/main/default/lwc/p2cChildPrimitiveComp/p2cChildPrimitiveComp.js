import { LightningElement ,api} from 'lwc';

export default class P2cChildPrimitiveComp extends LightningElement {
    @api name;
   @api carouselDetails;
   @api progressNumber;
}
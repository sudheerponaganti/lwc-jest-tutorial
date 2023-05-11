import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
const TOTAL_FIELDS=5;
const TOTAL = 100;
export default class ProgressBarExample extends LightningElement {
formData={};
progress=0;
    changeHandler(event){
        const{name,value}= event.target;
        if(value && value.trim()){
            this.formData[name]=value;
        }else{
            delete this.formData[name];
        }
 const filledValues = Object.values(this.formData).length
 this.progress= filledValues*(TOTAL/TOTAL_FIELDS);
    }
    resetHandler(){
        this.formData={};
        this.progress=0;
    }
    submitHandler(){
        if(Object.values(this.formData).length===5){
            const event = new ShowToastEvent({
                title: 'Success!!',
                message:'The Form is submitted.Hurray!!',
                variant: 'success'
            });
            this.dispatchEvent(event);
        }else{
            const event = new ShowToastEvent({
                title: 'Error!!',
                message:'Some Fields are Empty . Please fill  and submit',
                variant: 'error'
            });
            this.dispatchEvent(event);
        }
    }
}
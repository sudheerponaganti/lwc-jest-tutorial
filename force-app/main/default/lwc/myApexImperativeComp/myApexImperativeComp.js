import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class MyApexImperativeComp extends LightningElement {
  accounts;
error;
    loadAccounts(){
        getAccountList().then(result=>{
      this.accounts = result;
      this.error = null;
        }).catch(error=>{
      this.error = error;
      this.accounts = null;
        })
    }
}
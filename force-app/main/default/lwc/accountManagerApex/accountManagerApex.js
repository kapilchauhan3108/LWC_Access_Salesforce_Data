import { LightningElement ,wire, track } from 'lwc';
import getAllAccount from '@salesforce/apex/AccountManagerClass.returnAccounts'; 
import getAllAccountBasedOnUser from '@salesforce/apex/AccountManagerClass.returnAccountsBasedOnUser';
export default class AccountManagerApex extends LightningElement {


// Account List using Wire Service ------------------------
    @wire(getAllAccount)accountList;


    get responseReceived(){
        if(this.accountList){
            return true;
        }else{
            return false ;
        }
    }
//-------------------------------------------------------

// Accessing Apex method without using wire -----------------------------------

    totalNumber;
   @track fetchedAccount;
    changeNumberOfAccount(event){
        this.totalNumber = event.target.value;
    }

    getAccounts(){
        getAllAccountBasedOnUser({'howManyAccount' : this.totalNumber}).then(response=>{
            this.fetchedAccount = response;
        }).catch(error=>{
           console.log('Error Occured ' , error);
        });
    }
}
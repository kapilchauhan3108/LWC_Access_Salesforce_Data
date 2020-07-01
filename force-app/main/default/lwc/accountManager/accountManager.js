import { LightningElement, track ,wire ,api } from 'lwc';
import {createRecord ,getRecord} from 'lightning/uiRecordApi'; //LDS is written on User Interface API ..
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const fieldArray = ['Account.Name' , 'Account.Phone' , 'Account.Website'];
export default class AccountManager extends LightningElement {
    accountName;
    accountPhone;
    accountWebsite;
    retrievedAccountName; retrievedAccountPhone;  retrievedAccountWebsite;


    @api recordId ;
    @wire(getRecord , {recordId : '$recordId' , fields : fieldArray})
    wireRec({ error, data }) {
         if (error) {
            this.error = error;
            console.log('error while fetcing data ' , error);
         } else if (data) {
            
            console.log('data fetcted ', data);
            this.retrievedAccountName = data.fields.Name.value;
            this.retrievedAccountPhone = data.fields.Phone.value;;
            this.retrievedAccountWebsite = data.fields.Website.value;;
         }
    }         
       
     

    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }
    accountPhoneChangeHandler(event){
        this.accountPhone = event.target.value;
    }
    accountWebsiteChangeHandler(event){
        this.accountWebsite = event.target.value;
    }

    createAccount(){
        const fields =  {'Name' : this.accountName , 'Phone' : this.accountPhone  , 'Website' : this.accountWebsite};
        const record = {'apiName' : 'Account' , fields};
        console.log('inside Creating record');

        createRecord(record).then(response=>{        
            console.log('REcord Created Sucessfully with Id ' , response.id  ,'Check Response ', response );
            this.recordId = response.id;
            
        }).catch(error=>{

            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error Occured while creating Account >> ',
                    error,
                    variant: 'error',
                }),
            );
        

        });
    }
}
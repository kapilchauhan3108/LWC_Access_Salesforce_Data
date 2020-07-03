import { LightningElement ,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class AccountManagerLDSForm extends LightningElement {

    @api objectApiName;
    @api recordIdForForm ;

    accountId; // make this property as public if you want to use it in any recordPage then value of recordId will be supplied automatically 
    successhandler(event){
        this.accountId = event.detail.id;
    }

  fields = [NAME_FIELD ,  PHONE_FIELD , WEBSITE_FIELD];

    handleSubmit(event){
        // showing custom save
        event.preventDefault();       // stop the form from submitting otherwise no operation is needed ....
        const fields = event.detail.fields;
       // fields.LastName = 'My Custom Last Name'; // modify a field
        this.template.querySelector('lightning-record-form').submit(fields);

        const evt = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.fields.Name,
            variant: "success"
        });
        this.dispatchEvent(evt);
     }
}
import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigationExample extends NavigationMixin(LightningElement)  {



    openSFDCFacts(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webpage',
            attributes : {
                url : 'https://www.sfdcpoint.com'
            }
        });
    }

        navigateToObjectHome() {
            // Navigate to the Account home page
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'home',
                },
            });
        }

    navigateToNewPageCreate() {
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'New',
            },
        });
    }

    navigateToObjectListView() {
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'List',
            },
        });
    }

    navigateToObjectRecordPage(){

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'view', // you can also mention edit here 
                recordId : '0017F00002XheCRQAZ'
            },
        });
    }

    navigateTotab(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                objectApiName: 'Books',

            },
        });


    }


}
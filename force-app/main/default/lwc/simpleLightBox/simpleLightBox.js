import { LightningElement } from 'lwc';
import lightbox from '@salesforce/resourceUrl/Simple_LightBox'; // load static resource
import { loadStyle, loadScript } from 'lightning/platformResourceLoader'; // used to load html , css , js inside resource
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class SimpleLightBox extends LightningElement {


    renderedCallback(){
        Promise.all(
            [
                loadScript(this , lightbox +  'simplelightbox/dist/simple-lightbox.js'),
                loadStyle(this , lightbox + 'simplelightbox/dist/simple-lightbox.css')
            ]
        ).then( ()=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'SUCCESS!!',
                    message: 'Script loaded Successfully ! ',
                    variant: 'success',
                }),
            );
        }).catch(error =>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error!!',
                    message: error,
                    variant: 'error',
                }),
            );
            }
        );
    }


    openGallary(){

        SimpleLightBox.open({

            items : ['resource/ImageOnVf', 'resource/ImageOnVf']
        }
        );
    }

}
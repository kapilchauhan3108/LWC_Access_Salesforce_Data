import { LightningElement ,wire ,api } from 'lwc';
import { registerListener , unregisterAllListeners } from 'c/pubsub'; 
import  {CurrentPageReference} from 'lightning/navigation';

export default class AnyThirdComponent extends LightningElement {
    mettingRommInfo = {} ;
    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener ('pubsubtileclick' , this.onMeetingRoomSelectHandler , this); // Will have parameter : eventName, callback, thisArg
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
    }

    onMeetingRoomSelectHandler(payload){
        this.mettingRommInfo = payload;
    }

}
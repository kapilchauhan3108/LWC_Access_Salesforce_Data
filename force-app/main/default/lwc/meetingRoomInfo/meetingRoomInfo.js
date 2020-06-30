import { LightningElement ,track , api ,wire} from 'lwc';
import { fireEvent } from 'c/pubsub'; // Need to use the nameSpace like 'lightning' is a nameSpace ..
import  {CurrentPageReference} from 'lightning/navigation';

export default class ChildComponent2 extends LightningElement {

 //Creating a public component .. and define the default values ...
   @api meetingRoomInfo = {roomNumber : 'A-01' , roomCapacity : 10} ;

   @wire(CurrentPageReference) pageReference; // store the current Page Reference in 'pageReference' ...

    tileClicked(){       
        const tileCliked = new CustomEvent('tileclick' , {detail : this.meetingRoomInfo , bubbles :true}); //  'tileClick' is the name of the event
        this.dispatchEvent(tileCliked); // dispatchEvent is a JavaScript method to fire event ....

      // FireEvent takes 3 properties : PageReference , EventName and payload 
        fireEvent(this.pageReference , 'pubsubtileclick' ,  this.meetingRoomInfo);
    }
}
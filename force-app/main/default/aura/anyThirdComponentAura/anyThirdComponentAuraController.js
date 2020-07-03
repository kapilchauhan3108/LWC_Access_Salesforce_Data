({
    subscribeEvent : function(component, event, helper) {

        const pubSubModule = component.find("pubSubModule");

        const callBackFunction = $A.getCallback(function(payload){
            component.set("v.SelectedMeetingRoom" , payload);
        });

        pubSubModule.registerListener('pubsubtileclick' , callBackFunction);

    }
})

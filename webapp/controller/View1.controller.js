sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/m/DatePicker"
], (Controller,MessageBox,MessageToast,DatePicker) => {
    "use strict";

    return Controller.extend("com.indexit.appsept.controller.View1", {
        onInit() {
        }, 
        onClick(){
            // MessageBox.show("Button clicked", {
			// icon: MessageBox.Icon.INFORMATION,
			// title: "my message box title",
			// actions: [MessageBox.Action.YES, MessageBox.Action.NO],
			// emphasizedAction: MessageBox.Action.YES,
			// onClose: function (oAction) { / * do something * /}
            // });
            sap.m.MessageToast.show("Button clicked"); 

        },
        onDP(oControlEvent){
       
        },
    });
});
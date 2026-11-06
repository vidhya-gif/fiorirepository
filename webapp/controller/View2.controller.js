sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("org.vidhya.myproject.controller.View2", {
        onInit() {
        },
        onPress:function(){
            this.getOwnerComponent().getRouter().navTo("RouteView1");
        }
    });
});
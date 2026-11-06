sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("org.vidhya.myproject.controller.View1", {
        onInit() {
        },
      onNavigation:function(){
         this.getOwnerComponent().getRouter().navTo("RouteView2");
      }

    });
});
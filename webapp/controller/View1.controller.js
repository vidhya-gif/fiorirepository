sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/m/DatePicker",
    "sap/ui/model/json/JSONModel"
], (Controller,MessageBox,MessageToast,DatePicker,JSONModel) => {
    "use strict";

    return Controller.extend("com.indexit.appsept.controller.View1", {
        onInit() {
        var Country=
        [{
            "CountryName": "India","CountryCode" : "IN"
        },
              {
                "CountryName": "Germany","CountryCode" : "DE"
            },
              {
                "CountryName": "France","CountryCode" : "FR"
            },
              {
                "CountryName": "Japan","CountryCode" : "JP"
            },
              {
                "CountryName": "United States of America","CountryCode" : "USA"
            },
           {
            "CountryName" : "Russia" , "CountryCode" : "USSR"
           }
        ]
     var oModel = new JSONModel(Country);
     this.getView().setModel(oModel,"oCountryModel");

 }, 
        onClick(){

            var userInput=this.getView().byId("idInput").getProperty("value");

            MessageBox.show(userInput + " has clicked the button", {
			icon: MessageBox.Icon.INFORMATION,
			title: "my message box title",
			actions: [MessageBox.Action.YES, MessageBox.Action.NO],
			emphasizedAction: MessageBox.Action.YES,
			onClose: function (oAction) { / * do something * /}
            });
            // sap.m.MessageToast.show("Button clicked"); 

        },
        onDP(oControlEvent){
           
        },
        onSave(oEvent){
       //var userInput=this.getView().byId("idInput").setValue("cleaned the value");
      var userInput=this.getView().byId("_IDGenInput1").getValue();
      var selectedKey = this.getView().byId("_IDGenSelect").getProperty("selectedKey");
      var selectedText = this.getView().byId("_IDGenSelect").getSelectedItem().getProperty("text");
  
      var output = userInput + " is on a vacation in " + selectedText +" where the country code is "+ selectedKey;
   
         MessageBox.show( output, {
			icon: MessageBox.Icon.INFORMATION,
			title: "my message box title",
			actions: [MessageBox.Action.YES, MessageBox.Action.NO],
			emphasizedAction: MessageBox.Action.YES,
			onClose: function (oAction) { / * do something * /}
            });
      
        }
    });
});
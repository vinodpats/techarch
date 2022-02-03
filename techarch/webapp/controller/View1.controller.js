sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("techarch.controller.View1", {
            onInit: function () {

                

            },

            onPress: function (oEvent){
                  //  MessageToast.show("Yes, button was pressed");
                  var oItem = oEvent.getSource();
                  var oBindingContext = oItem.getBindingContext();
                  var oModel = this.getView().getModel();
                  sap.m.URLHelper.redirect(oModel.getProperty("url", oBindingContext), true);
            },
        });
    });

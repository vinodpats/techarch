sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "techarch/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("techarch.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                //initialize model
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=IpKaNod29tFhfdYgmOlgVcguOpYjslyC");
                this.setModel(oModel);

            }
        });
    }
);
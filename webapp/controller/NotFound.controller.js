/* global sap */
sap.ui.define([
    "RESOURCE_ROOT/controller/BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("RESOURCE_ROOT.controller.NotFound", {
        onBackLinkPressed: function () {
            this.getRouter().navTo("TARGET");
        }

    });
});

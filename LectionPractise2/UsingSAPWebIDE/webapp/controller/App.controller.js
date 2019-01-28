sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("odata.PractiseSAPUI5.controller.App", {
		onInit: function () {

		},
		handleListItemPress: function (evt) {
			var oItem = evt.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter.navTo("detail", {
				invoicePath: encodeURIComponent(oItem.getBindingContext("people").getPath().substr(1))
			});
		}

	});
});
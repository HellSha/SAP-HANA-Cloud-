sap.ui.require([
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/core/ComponentContainer"
], function (ResourceModel, ComponentContainer) {
	"use strict";
	sap.ui.getCore().attachInit(function () {
		new ComponentContainer({
			name: "sap.ui.demo.db",
			settings : {
				id : "db"
			}
		}).placeAt("content");
		var oResourceModel = new ResourceModel({
			bundleName: "sap.ui.demo.db.i18n.i18n"
		});
		sap.ui.getCore().setModel(oResourceModel, "i18n");
	});
});
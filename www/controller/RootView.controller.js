sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ui5uitemplate1.controller.RootView", {
            onInit: function () {
                //alert("onInit Event");
                //Device Ready event goes first, followed by onInit Event
              
                if(typeof window.sqliteDB === 'undefined') {
                    alert('Variable window.sqliteDB is undefined.');
                } else if(window.sqliteDB === null){
                    alert('Variable window.sqliteDB is null.');
                }
                
            }
        });
    });

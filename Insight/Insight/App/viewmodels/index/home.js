/// <reference path="../../Scripts/knockout-2.2.1.js" />
define(function (require) {
    var insightRepositery = require("services/menuService");
   
    return {
        menus: ko.observable(),
        activate: function () {
            console.log(insightRepositery.listmenus());
            this.menus(insightRepositery.listmenus());
        }
    };
});
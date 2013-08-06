define(function (require) {
    var router = require('durandal/plugins/router');

    return {
        router: router,
        activate: function () {
            console.log("Starting the funtion");
            return router.activate('index/home');
        }
    };
});
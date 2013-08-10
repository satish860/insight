define(function (require) {
    var router = require('durandal/plugins/router'),
        index = require('viewmodels/registration/index'),
    initapp = require('viewmodels/registration/initapp'),
            detailPlan = require('viewmodels/registration/detailplan');
    var valid = {
        isInitAppValid: function () {
            return (initapp.questions.errors().length > 0) ? 'Invalid' : 'Valid';
        },
        isDetailPlanValid: function () {
            return (detailPlan.questions.errors().length > 0) ? 'Invalid' : 'Valid';
        }
    };
    return {
        router: router,
        initapp: initapp,
        valid: valid,
        naivagateToInitApp: function () {
            initapp.activate();
            //return router.activate('registration/initapp');
        },
        activate: function () {
            return router.activate('registration/detailplan');
        }
    };
});
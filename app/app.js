(
    function ()
    {
        'use strict';

        angular.module('prodigious', [
            'ui.router', 
            'ngMaterial',
            'ngResource',
            'ngMessages',
            'chart.js'
        ]).controller('AppCtrl', AppCtrl);
        AppCtrl.$inject = ['$state'];
        function AppCtrl($state)
        {
            $state.go("menu.welcome");
        }
    }
)();
(
    function ()
    {
        'use strict';

        angular.module('prodigious', [
            'ui.router', 
            'ngMaterial',
            'ngResource',
            'ngMessages',
            'chart.js',
            'ngTagsInput'
        ]).controller('AppCtrl', AppCtrl);
        AppCtrl.$inject = ['$state', 'languageReader'];
        function AppCtrl($state, languageReader)
        {
            //languageReader should be a provider so that this could be done at config
            languageReader.setLanguage('es');
            $state.go("menu.welcome");
        }
    }
)();
(
    function ()
    {
        'use strict';

        angular
            .module('prodigious')
            .constant('states', getStates())
            .config(setup);

        setup.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider', 'states','$mdThemingProvider'];

        function setup($locationProvider, $urlRouterProvider, $stateProvider, states, $mdThemingProvider)
        {
            $locationProvider.hashPrefix('!');
            $locationProvider.html5Mode(false);
            //$locationProvider.html5Mode({ enabled: true, requireBase: false });
            //$locationProvider.html5Mode(true);
            //$locationProvider.hashPrefix('!');
            //$locationProvider.html5Mode(true); 
            states.forEach(enterState);
            function enterState(state_)
            {
                $stateProvider.state(state_.state, state_.config);
            }
            $urlRouterProvider.otherwise('/welcome');
            $mdThemingProvider.theme('juanTheme')
                .primaryPalette('orange')
                .accentPalette('green')
                .warnPalette('blue')
        }



        function getStates()
        {
            var a =
                [
                    {
                        state: 'menu',
                        config:
                            {
                                url: '',
                                templateUrl: 'components/menu/menu.html',
                                controller: 'MenuController',
                                controllerAs: 'vm'
                            }
                    },
                    {
                        state: 'menu.welcome',
                        config:
                            {
                                url: '/welcome',
                                templateUrl: 'components/welcome/welcome.html',
                                controller: 'WelcomeController',
                                controllerAs: 'vm'
                            }
                    },
                    {
                        state: 'menu.upload',
                        config:
                            {
                                url: '/upload',
                                templateUrl: 'components/upload/upload.html',
                                controller: 'UploadController',
                                controllerAs: 'vm'
                            }
                    },
                    {
                        state: 'menu.message',
                        config:
                            {
                                url: '/message',
                                templateUrl: 'components/message/message.html',
                                controller: 'MessageController',
                                controllerAs: 'vm'
                            }
                    }
                ]
            return a;
        }
    }
)();


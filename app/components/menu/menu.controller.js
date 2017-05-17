(
    function ()
    {
        'use strict';
        angular
            .module('prodigious')
            .controller('MenuController', MenuController);

        MenuController.$inject =
            ['$mdSidenav', '$state', '$scope', 'languageReader']

        function MenuController($mdSidenav, $state, $scope, languageReader)
        {
            var vm = this;

            vm.openClose = openClose;
            vm.goToWelcome = goToWelcome;
            vm.goToUpload = goToUpload;
            vm.goToMessage = goToMessage;
            vm.switchLanguage = switchLanguage;
            init();
            function init()
            {
                $scope.$watch
                    (
                        function ()
                        {
                            return $state.current.name;
                        },
                        function ()
                        {
                            vm.currentState = $state.current.name;
                        }
                    )
                $scope.$watch
                    (
                        function ()
                        {
                            return languageReader.getLanguage();
                        },
                        function ()
                        {
                            vm.words = languageReader.getWords();
                        }
                    );
                vm.words = languageReader.getWords();
            }
            function openClose()
            {
                $mdSidenav('sidemenu').toggle();
            }
            function goToWelcome()
            {
                $state.go('menu.welcome');
                openClose();
            }
            function goToUpload()
            {
                $state.go('menu.upload');
                openClose();
            }
            function goToMessage()
            {
                $state.go('menu.message');
                openClose();
            }
            function switchLanguage()
            {
                if (languageReader.getLanguage() === 'es')
                {
                    languageReader.setLanguage('en');
                }
                else
                {
                    languageReader.setLanguage('es');
                }
                openClose();
            }
        }
    }
)();


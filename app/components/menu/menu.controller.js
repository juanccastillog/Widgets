(
    function ()
    {
        'use strict';
        angular
            .module('prodigious')
            .controller('MenuController', MenuController);

        MenuController.$inject =
            ['$mdSidenav', '$state', '$scope']

        function MenuController($mdSidenav, $state, $scope)
        {
            var vm = this;

            vm.openClose = openClose;
            vm.goToWelcome = goToWelcome;
            vm.goToUpload = goToUpload;
            vm.goToMessage = goToMessage;

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
        }
    }
)();


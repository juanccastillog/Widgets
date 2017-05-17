(
    function ()
    {
        'use strict';
        angular
            .module('prodigious')
            .controller('MenuController', MenuController);

        MenuController.$inject =
            ['$mdSidenav', '$state']

        function MenuController($mdSidenav, $state)
        {
            var vm = this;

            vm.openClose = openClose;
            vm.goToWelcome = goToWelcome;
            vm.goToUpload = goToUpload;
            vm.goToMessage = goToMessage;
            
            function openClose()
            {
               $mdSidenav('sidemenu').toggle(); 
            }
            function goToWelcome()
            {
                $state.go('menu.welcome');
                openClose();
                vm.item = "welcome";
            }
            function goToUpload()
            {
                $state.go('menu.upload');
                openClose();
                vm.item = "upload";
            }
            function goToMessage()
            {
                
            }            
        }
    }
)();


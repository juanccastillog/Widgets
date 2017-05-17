(
    function ()
    {
        'use strict';
        angular
            .module('prodigious')
            .controller('WelcomeController', WelcomeController);

        WelcomeController.$inject =
            ['$mdSidenav', 'dataReader', 'localStore']

        function WelcomeController($mdSidenav, dataReader, localStore)
        {
            var vm = this;

            vm.init = init;
            vm.toggleLoveIt = toggleLoveIt;
            init();
            function init()
            {
                vm.ILoveIt = false;
                if (!(localStore.getItem("nviews") == null))
                {
                    vm.nviews = parseInt(localStore.getItem("nviews")) + 1;
                    localStore.setItem("nviews", vm.nviews);
                    vm.nmessages = parseInt(localStore.getItem("nmessages"));
                    vm.nloves = parseInt(localStore.getItem("nloves"));
                }
                else
                {
                    dataReader.readData().get(function (data) {
                        vm.nviews = parseInt(data.nviews) + 1;
                        vm.nmessages = parseInt(data.nmessages);
                        vm.nloves = parseInt(data.nloves);
                        localStore.setItem("nviews", vm.nviews);
                        localStore.setItem("nmessages", vm.nmessages);
                        localStore.setItem("nloves", vm.nloves);                        
                    }
                    );
                }

            }
            function toggleLoveIt()
            {
                if (vm.ILoveIt)
                {
                    vm.ILoveIt = false;
                    vm.nloves -= 1;

                }
                else
                {
                    vm.ILoveIt = true;
                    vm.nloves += 1;
                }
            }

        }
    }
)();
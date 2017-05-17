(
    function ()
    {
        'use strict';
        angular
            .module('prodigious')
            .controller('UploadController', UploadController);

        UploadController.$inject =
            ['$mdDialog', 'localStore', 'dataReader']

        function UploadController($mdDialog, localStore, dataReader)
        {
            var vm = this;
            vm.simulateUpload = simulateUpload;
            init();
            function init()
            {
                vm = {audio: 0, video: 0, photo: 0, other: 0, total: 0,totalFiles: 0};
                if (!(localStore.getItem("audio") == null))
                {
                    getStoredValues();
                }
                else
                {
                    readValues();
                }
            }
            function simulateUpload(event)
            {
                $mdDialog.show
                    (
                        {
                            controller: 'UploadSimulator',
                            controllerAs: 'vm',
                            templateUrl: 'components/upload/uploadsimulator.html',
                            targetEvent: event,
                            clickOutsideToClose: true,
                            fullscreen: true,
                            locals:
                                {
                                    data: {audio: vm.audio, video: vm.video}
                                }
                        }
                    )
                    .then
                    (
                        function (data)
                        {
                            updateModel(data);
                            storeValues();
                        }
                    );
            }
            function readValues()
            {
                dataReader.readData().get(
                    function (data)
                    {
                        updateModel(data);
                        storeValues();
                    }
                );
            }

            function updateModel(data)
            {
                vm.audio = parseInt(data.audio) || 0;
                vm.video = parseInt(data.video) || 0;
                vm.photo = parseInt(data.photo) || 0;
                vm.totalFiles = parseInt(data.totalFiles) || 0;
                vm.other = parseInt(data.other) || 0;
                vm.total = vm.audio + vm.video + vm.photo + vm.other;
                vm.audioRate = Math.floor((vm.audio / vm.total) * 100);
                vm.videoRate = Math.floor((vm.video / vm.total) * 100);
                vm.photoRate = Math.floor((vm.photo / vm.total) * 100);
                vm.otherRate = 100 - vm.audioRate - vm.videoRate - vm.photoRate;
            }

            function storeValues()
            {
                localStore.setItem("audio", vm.audio);
                localStore.setItem("video", vm.video);
                localStore.setItem("photo", vm.photo);
                localStore.setItem("totalFiles", vm.totalFiles);
                localStore.setItem("other", vm.other);
            }

            function getStoredValues()
            {
                var data = {audio: null, video: null, photo: null};
                data.audio = localStore.getItem("audio");
                data.video = localStore.getItem("video");
                data.photo = localStore.getItem("photo");
                data.totalFiles = localStore.getItem("totalFiles");
                data.other = localStore.getItem("other");
                updateModel(data);
            }

        }
    }
)();

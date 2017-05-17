(
    function ()
    {
        'use strict';
        angular
            .module('prodigious')
            .controller('MessageController', MessageController);

        MessageController.$inject =
            ['localStore', '$timeout']

        function MessageController(localStore, $timeout)
        {
            var vm = this;
            vm.submit = submit;
            init();
            function init()
            {
                if (!(localStore.getItem("contacts") == null))
                {
                    getStoredValues();
                }
                else
                {
                    vm.contacts = [];
                    vm.saveCopy = false;
                    vm.viewprogress = false;
                    vm.messageSent = false;
                }
            }
            function submit(event)
            {
                vm.viewprogress = true;
                $timeout
                    (
                        function ()
                        {
                            vm.viewprogress = false;
                            vm.messageSent = true;
                            $timeout
                                (
                                    function ()
                                    {
                                        vm.messageSent = false;
                                    },2000
                                );
                        },
                        3000
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
                vm.chartData = [vm.audio, vm.video, vm.photo, vm.other];
                vm.chartLabels = ['audio', 'video', 'photo', 'other'];
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
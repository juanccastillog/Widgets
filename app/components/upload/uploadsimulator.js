(
function ()
{
    'use strict';
    angular
            .module('prodigious')
            .controller('UploadSimulator', UploadSimulator);

    UploadSimulator.$inject = ['data','$mdDialog'];
    function UploadSimulator(data, $mdDialog)
    {
        var vm;                
        vm = this;                
        init();
        
        function init()
        {    
            vm.audio = data.audio;
            vm.video = data.video;
            vm.photo = data.photo;
            vm.totalFiles = data.totalFiles;
        }
        
        vm.clickClose = clickClose;
        vm.clickDone = clickDone;
        
        function clickClose()
        {
           $mdDialog.cancel();
        }
        
        function clickDone()
        {
            var answer;
            answer = {audio: null, video: null, photo: null, totalFiles : null};
            answer.audio = '' || vm.audio;
            answer.video = '' || vm.video;
            answer.photo = '' || vm.photo;
            answer.totalFiles = '' || vm.totalFiles;
            $mdDialog.hide(answer);
        }
        
             
    }
}
)();
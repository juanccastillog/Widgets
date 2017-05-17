(function()
{

'use strict';

angular
    .module('prodigious')
    .factory('localStore', localStore);

    localStore.$inject = ['$window'];
    
    function localStore($window)
    {
        var service;

        service =
        {            
            getItem : getItem,
            setItem : setItem
        }

        return service;

        function getItem(item)
        {
            return $window.localStorage.getItem(item);
        }

        function setItem(item, value)
        {
            $window.localStorage.setItem(item, value);
        }
    }





})();
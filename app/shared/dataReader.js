(function ()
{
    'use strict';
    angular.
            module('prodigious').
            factory('dataReader', dataReader);
    dataReader.$inject = ['$resource'];
    function dataReader($resource)
    {
        var interface_;
        interface_ = {
            readData:readData
        };
        return interface_;
        
        function readData()
        {
            var nombrearchivo = 'resources/data/data.json';
            return $resource(nombrearchivo);
        }
    }

}
)();
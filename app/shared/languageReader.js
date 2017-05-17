(function ()
{
    'use strict';
    angular.
            module('prodigious').
            factory('languageReader', languageReader);
    languageReader.$inject = ['$resource'];
    function languageReader($resource)
    {
        var interface_;

        interface_ = {
            setLanguage:setLanguage,
            getLanguage:getLanguage,
            getWords:getWords,
            mLanguage : "en",
            mWords : {}
        };
        return interface_;
        
        function setLanguage(language)
        {            
            var nombrearchivo = 'resources/languages' + '/'+language+'/words.json';            
            $resource(nombrearchivo).get(
                    function (data)
                    {
                        interface_.mWords = data;
                        interface_.mLanguage = language;
                    }
                );
        }        
        
        function getLanguage()
        {
            return interface_.mLanguage;
        }
        
        function getWords()
        {
            return interface_.mWords;
        }
    }

}
)();
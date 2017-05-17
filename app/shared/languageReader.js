(function ()
{
    'use strict';
    angular.
            module('hojadevida').
            factory('lectorLocalHojaDeVida', lectorLocalHojaDeVida);
    lectorLocalHojaDeVida.$inject = ['$resource'];
    function lectorLocalHojaDeVida($resource)
    {
        var interfaz;
        interfaz = {
            leerhoja: leerhoja,
            leerpalabras : leerpalabras
        };
        return interfaz;
        
        function leerhoja(nombreusuario, idioma)
        {
            var nombrearchivo = 'recursos/infoHojas/' + nombreusuario + '/'+idioma+'/hojadevida.json';
            var hojadevidainfo ;
            return $resource(nombrearchivo).get(traeIdioma);
            function traeIdioma(data)
            {
                hojadevidainfo = data;
            }
        }
        
        function leerpalabras(idioma)
        {
            var nombrearchivo = 'recursos/json' + '/'+idioma+'/palabras.json';
            var palabras ;
            return $resource(nombrearchivo).get(traeIdioma2);
            function traeIdioma2(data)
            {
                palabras = data;
            }            
        }

    }

}
)();
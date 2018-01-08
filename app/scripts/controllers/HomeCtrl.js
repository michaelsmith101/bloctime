(function() {
    function HomeCtrl() {
        var Home = {}
        Home.start = function() {
            count = 1
        }
    }

    angular
        .module('bloctime')
        .controller('HomeCtrl', [HomeCtrl]);
})();
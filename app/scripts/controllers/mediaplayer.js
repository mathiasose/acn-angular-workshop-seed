'use strict';

angular.module('accAngularWorkshopSeedApp')
    .controller('MediaplayerCtrl', function ($scope, $resource, mediaPlayerService) {
        $scope.mediaPlayers = mediaPlayerService.readAll();
        $scope.edit = function(id) {
            console.log(id);
        }
    });

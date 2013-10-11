'use strict';

angular.module('accAngularWorkshopSeedApp')
    .controller('MediaplayerCtrl', function ($scope, $resource, mediaPlayerService) {
        var getLatest = function(){
            $scope.mediaPlayers = mediaPlayerService.readAll();
        }

        getLatest();

        $scope.edit = function(player) {
            player.editMode = true;
        }

        $scope.delete = function(player) {
            alert("Do you really want to delete " + player.name + "?");
            mediaPlayerService.delete(player._id);
            getLatest();
        }

        $scope.save = function(player) {
            player.editMode = false;
            mediaPlayerService.update(player);
            getLatest();
        }

        $scope.saveNew = function(player) {
            mediaPlayerService.create(player);
            getLatest();
        }

    });

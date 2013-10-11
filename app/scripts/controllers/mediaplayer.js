'use strict';

angular.module('accAngularWorkshopSeedApp')
    .controller('MediaplayerCtrl', function ($scope, $resource, mediaPlayerService) {
        $scope.getLatest = function(){
            $scope.mediaPlayers = mediaPlayerService.readAll();
        }

        $scope.getLatest();

        $scope.edit = function(player) {
            player.editMode = true;
        }

        $scope.delete = function(player) {
            if (confirm("Do you really want to delete " + player.name + "?")) {
                mediaPlayerService.delete(player._id);
                $scope.getLatest();
            }
        }

        $scope.save = function(player) {
            player.editMode = false;
            mediaPlayerService.update(player);
            //$scope.getLatest(); // denne vil avbryte evt. andre edits som pågår
        }

        $scope.saveNew = function(player) {
            mediaPlayerService.create(player);
            $scope.getLatest();
        }

    });

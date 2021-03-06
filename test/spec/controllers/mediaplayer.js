'use strict';

describe('Controller: MediaplayerCtrl', function () {

  // load the controller's module
  beforeEach(module('adsCmsFrontendAppApp'));

  var MediaplayerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MediaplayerCtrl = $controller('MediaplayerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

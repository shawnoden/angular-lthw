{% raw %}
describe('PasswordController', function() {
  
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('PasswordController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });
  });
  
  
});
{% endraw %}

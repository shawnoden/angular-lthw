var app = angular.module('app',[]);

app.controller('FirstCtrl', ['$scope', FirstCtrl]);
app.controller('SecondCtrl', ['$scope', SecondCtrl]);
app.controller('PasswordController', ['$scope', PasswordController]);

function FirstCtrl($scope) {

}

function SecondCtrl($scope) {

}


function PasswordController($scope) {

  $scope.password = '';
  
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
  
}

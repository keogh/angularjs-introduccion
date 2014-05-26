angular.module('TodoApp').controller('MainCtrl', function ($scope) {
  $scope.itemName = null;

  $scope.items = [
    {name: 'Terminar videotutorial de AngularJS', done: false},
    {name: 'Videotutorial de Gulp', done: false}
  ];

  $scope.addItem = function () {
    var item = {
      name: $scope.itemName,
      done: false
    };
    $scope.items.push(item);
    $scope.itemName = null;
  };
});
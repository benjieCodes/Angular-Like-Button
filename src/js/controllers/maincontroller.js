function MainController ($scope) {
  $scope.count = 0;
  $scope.buttonStatus = "Likes:" + " ";
  $scope.clicked = function () {
  $scope.count++;
  $scope.buttonStatus = ($scope.count === 1) ? "Like: " : "Likes: ";
  }
}

export { MainController };

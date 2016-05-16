function MainController ($scope) {
  $scope.buttonStatus = "Likes:" + " ";
  $scope.clicked = function () {
    if ($scope.count >= 1) {
      $scope.buttonStatus = "Likes: "
    }
    else $scope.buttonStatus = "Like: ";
    }
  }


export { MainController };

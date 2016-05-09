
artistControllers.controller('HomeController', ['$scope', '$https', function ($scope, $https){
        $https.get('js/data.json').success(function(data) {
          $scope.artists = data;
          $scope.artistOrder = 'name';
        });
}]);

myApp.controller('ScheduleController', 
  ['$scope', '$rootScope', '$firebaseArray', 'FIREBASE_URL',
  function($scope, $rootScope, $firebaseArray, FIREBASE_URL) {

    var classRef = new Firebase(FIREBASE_URL + 'classes/');
    var classInfo = $firebaseArray(classRef);
    $scope.meetings = classInfo;

    classInfo.$loaded().then(function(data) {
      $rootScope.howManyMeetings = classInfo.length;
    });

    classInfo.$watch(function(data) {
      $rootScope.howManyMeetings = classInfo.length;
    });
}]);

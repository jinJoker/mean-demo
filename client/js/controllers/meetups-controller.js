angular.module("demo", [])
    .controller("meetupsController", ['$scope', function($scope){
        $scope.meetupsCount = 10;
        $scope.meetups = [
            { name: "MEAN SF Developers" },
            { name: "Some other meetups" }
        ];
        $scope.createMeetup = function(){
            $scope.meetups.push({name:$scope.meetupName});
            $scope.meetupName = '';
    }
}]);

//meetupsController.$inject = ['$scope'];

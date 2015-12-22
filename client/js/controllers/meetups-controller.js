app.controller("meetupsController", ['$scope', '$resource', function($scope, $resource){
        var Meetup = $resource('/api/meetups');
        
        $scope.meetups = [
            { name: "MEAN SF Developers" },
            { name: "Some other meetups" }
        ];
        $scope.createMeetup = function(){
            //old version: list will be refreshed by refreshing
            //$scope.meetups.push({name:$scope.meetupName});
            //$scope.meetupName = '';
            
            var meetup = new Meetup();
            meetup.name = $scope.meetupName;
            meetup.$save();
    }
}]);

//meetupsController.$inject = ['$scope'];

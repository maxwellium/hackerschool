angular
  .module('hackerschoolApp')
  .controller('tamagotchiController', function( $scope, $interval, tamagotchiService ){

    $scope.tamagotchi = tamagotchiService;

    $scope.start = ()=>{
      $scope.started = true;
      tamagotchiService.start();
    };


    // $interval(()=>{
    //   $scope.night = !$scope.night;
    // }, 10000);
  });

console.log('search is connected');

app.controller('searchCtrl', ['$scope', '$location', '$http', function($scope, $location, $http){

  $scope.findResults = function(){

    $http({
      method: 'GET',
      url: 'https://api-public.guidebox.com/v1.43/ US/rKWyQ9O3z3x2qq8vgf9FyfNVZYP5ATW5', //api key located after region. remember: only 250 calls per month
      headers: {'Authorization': token},
      params: {'term': $('input[id="bizNameHere"]').val(),
                'location': $('input[id="bizAddressHere"]').val()}
      }).then(function successCallback(response){
        $scope.results = response.data; //placed at the right bracket of the response, helps define response and tells it what you need
      }, function errorCallback (response){
      });
    }
  };

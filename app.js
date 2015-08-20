//On your terminal cd into your catsagram folder. cd ~/Desktop/catstagram
//copy and paste python -m SimpleHTTPServer into your terminal
//Open localhost:8000 in your browser.

//Create an angular app called catstagram
// var app = ...
var app = angular.module('catstagram', []);
//Create a CatController
app.controller('CatController', ['$scope', '$http', function($scope, $http){
	//Get the cats data using $http from data.json.
  $http.get('data.json').then(function(response){
    $scope.cats = response.data.cats;
  });

	//On success function assign the data.cats to $scope.cats variable.

	// Don't forget to add $http as your contollers dependecy.

	//Write a $scope.like function that takes index as an argument and adds 1 to likes attribute of the cat on $scope.cats[index].

  $scope.like = function(index){
    console.log($scope.cats[index].likes);
  $scope.cats[index].likes =  $scope.cats[index].likes + 1;
   console.log($scope.cats[index].likes);
  }


	// $scope.like = ...

  $scope.addCat = function(newCat){
   $scope.newCat = {};
   $scope.newCat.likes = 1;
   $scope.cats.unshift(newCat);
  }

}]);

app.directive("myDirective", [function(){
  return{
    link: function(scope, elelment, attrs){
      console.log()
    }
  }
}

//Optional

//Create a directive to replace the <span> tag.
//Add "liked" class to your element on mouseenter event.

//Optional
//Create the submitComments function in your controller

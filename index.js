var VSTDA = angular.module('ToDoApp',[]);

VSTDA.controller('myCtrl', ['$scope', function($scope){


           $scope.mynotes=[];

              $scope.addTodo = function(){
             
               //       if($scope.selectedOption==="1"){
               // 	$scope.selectedOption="High Priority"     
               // }         
               //       if($scope.selectedOption==="2"){
               // 	$scope.selectedOption="Medium Priority"
               // }                

               //       if($scope.selectedOption==="3"){
               // 	$scope.selectedOption="Low Priority"
               // }
                   
                       $scope.mynotes.push({
                      "task":      $scope.newtodo,
                      "priority":  $scope.selectedOption
                  
                    });

              
              

               };
         
          

           }]);
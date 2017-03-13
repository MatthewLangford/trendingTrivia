angular.module('triviaApp').controller('triviaController', function ($scope, triviaService) {

        $scope.addButton = true;
        $scope.currentPage = 0;

        $scope.correct = 'white';

        $scope.changeLabel = function () {
            console.log($scope.label)
            $scope.label = 1;
            console.log($scope.label);
        };
        $scope.getQuestions = function() {
            triviaService.getQuestions($scope.currentPage).then(function (response) {
                $scope.questions = response.data;
                console.log($scope.questions)
            });
        };

        $scope.addQuestion = function (question) {
            triviaService.addQuestion(question).then(function (responsse) {

            });
        };


        $scope.getQuestions();

        $scope.nextPage = function () {
            $scope.currentPage++;
            $scope.getQuestions();
        };

        $scope.prevPage = function () {
            $scope.currentPage--;
            $scope.getQuestions();
        };


    $scope.checkAnswer = function (pInd,ind) {
        if($scope.questions[pInd].correct_answer === ind){
            $scope.correct = 'green';
        }else{
            $scope.correct = 'red';
        }
    };


});
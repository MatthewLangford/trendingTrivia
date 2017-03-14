angular.module('triviaApp').controller('triviaController', function ($scope, triviaService) {

        $scope.addButton = true;
        $scope.currentPage = 0;
        $scope.edit = true;


        $scope.getQuestions = function() {
            triviaService.getQuestions($scope.currentPage).then(function (response) {
                $scope.questions = response.data;
                console.log($scope.questions)
            });
        };

        $scope.addQuestion = function (question) {
            triviaService.addQuestion(question).then(function (response) {
                $scope.questions = response.data;
                $scope.addButton = !$scope.addButton;
                console.log($scope.questions)
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


    $scope.checkAnswer = function (ind, quest) {
            quest.selected = true;
            $scope.optionSelected = true;
        if(quest.correct_answer === ind+1) {
            quest.correct = true;
            $scope.optionSelectedCorrect = true;
            return;
        }
           quest.correct = false;
            $scope.optionSelectedCorrect = false;
    };

    $scope.cancel = function () {
        $scope.addButton = !$scope.addButton;
        $scope.Question = '';
        $scope.Animal = '';
        $scope.Difficulty = 2;
        $scope.option1 ='';
        $scope.option2  = '';
        $scope.option3 = '';
        $scope.option4 = '';
    }

});
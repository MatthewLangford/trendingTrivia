angular.module('triviaApp').controller('triviaController', function ($scope, triviaService) {

    $scope.currentPage = 0;
        $scope.check = function (pind,ind) {
           if ($scope.questions[pind]['correct_answer'] === ind)
            console.log(true)
            $scope.correct = true;
        };

        triviaService.getQuestions($scope.currentPage).then(function (response) {
            $scope.questions = response.data;
            console.log($scope.questions)
        });

        $scope.nextPage = function () {
            $scope.currentPage++;
            triviaService.getQuestions($scope.currentPage).then(function (response) {
                $scope.questions = response.data;
            });
        };

        $scope.prevPage = function () {
            $scope.currentPage--;
            triviaService.getQuestions($scope.currentPage).then(function (response) {
            $scope.questions = response.data;
        });
    }
});
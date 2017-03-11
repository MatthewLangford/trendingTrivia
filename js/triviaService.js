angular.module('triviaApp').service('triviaService', function ($http) {

    this.getQuestions = function (num) {
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/api/trivia/questions?page=' + num
        });
    }

});

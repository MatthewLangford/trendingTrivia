angular.module('triviaApp').service('triviaService', function ($http) {

    this.getQuestions = function (num) {
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/api/trivia/questions?page=' + num
        });
    };

    this.addQuestion = function (question) {
        return $http({
            method: 'POST',
            url: 'https://practiceapi.devmountain.com/api/trivia/questions',
            data: question
        });
    };

    this.editQuestion = function (question,id) {
        return $http({
            method: 'PUT',
            url: 'https://practiceapi.devmountain.com/api/trivia/questions/:id',
            data: question
        })
    }

});

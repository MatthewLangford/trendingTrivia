angular.module('triviaApp').controller('triviaController', function ($scope, triviaService) {

        $scope.addButton = true;
        $scope.currentPage = 0;
        $scope.editQuestionId = 0;

        $scope.getQuestions = function() {
            triviaService.getQuestions($scope.currentPage).then(function (response) {
                $scope.questions = response.data;
                console.log($scope.questions)
            });
        };

        $scope.getQuestions();

        $scope.addQuestion = function (question) {
            triviaService.addQuestion(question).then(function (response) {
                $scope.getQuestions();
                $scope.addButton = !$scope.addButton;
            });
        };

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
            if(quest.correct_answer === ind+1) {
                quest.correct = true;
                return;
            }
               quest.correct = false;
        };

        $scope.addQuestionbutton = function () {
            $scope.Question = '';
            $scope.Animal = '';
            $scope.Difficulty = '';
            $scope.correctAnswer = '';
            $scope.option1 = '';
            $scope.option2 = '';
            $scope.option3 = '';
            $scope.option4 = '';
            $scope.addButton = false;
            $scope.saveQuest = true;
            $scope.edit = false;
        };

        $scope.editQuestionbutton = function (index) {
            $scope.addButton = false;
            $scope.saveQuest = false;
            $scope.edit = true;
            $scope.Question = $scope.questions[index].question;
            $scope.Animal = $scope.questions[index].animal;
            $scope.Difficulty = $scope.questions[index].difficulty;
            $scope.correctAnswer = $scope.questions[index].correct_answer;
            $scope.option1 = $scope.questions[index].options['1'];
            $scope.option2 = $scope.questions[index].options['2'];
            $scope.option3 = $scope.questions[index].options['3'];
            $scope.option4 = $scope.questions[index].options['4'];
            $scope.editQuestionId = $scope.questions[index]._id;
        };

        $scope.saveChange = function (question) {
            triviaService.editQuestion(question, $scope.editQuestionId).then(function (response) {
                $scope.getQuestions();
                $scope.addButton = !$scope.addButton;
            })
        };

        $scope.deleteQuestion = function () {
            triviaService.deleteQuestion($scope.editQuestionId).then(function () {
                $scope.getQuestions();
                $scope.addButton = !$scope.addButton;
            })
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
angular.module('userControllers', ['userServices'])

    .controller('regCtrl', function ($http, $location, $timeout, User) {
        var app = this;
        this.regUser = function (regData) {
            app.errorMsg = false;

            User.create(app.regData).then(function (data) {

                if (data.data.success) {
                    app.successMsg = data.data.message;
                    $timeout(function () {
                        $location.path('/about');
                    }, 2000);
                } else {
                    app.errorMsg = data.data.message;
                }
            });
        };

        this.checkUsername = function (regData) {
            app.checkingUsername = true;
            app.usernameMsg = false;
            app.usernameInvalid = false;
            User.checkUsername(app.regData).then(function (data) {
                if (data.data.success) {
                    app.usernameInvalid = false;
                    app.usernameMsg = data.data.message;
                } else {
                    app.usernameInvalid = true;
                    app.usernameMsg = data.data.message;
                }
                app.checkingUsername= false;
            });
        };
        this.checkEmail = function (regData) {
            app.checkingEmail = true;
            app.emailMsg = false;
            app.emailInvalid = false;
            User.checkEmail(app.regData).then(function (data) {
                if (data.data.success) {
                    app.emailInvalid = false;
                    app.emailMsg = data.data.message;
                } else {
                    app.emailInvalid = true;
                    app.emailMsg = data.data.message;
                }
                app.checkingEmail = false;
            });
        };
    })
    .directive('matchPassword', function () {
        return {
            restrict: 'A',
            controller: function ($scope) {
                $scope.doConfirm = function (values) {
                    console.log(values);
                };

            },
            link: function (scope, element, attrs) {
                attrs.$observe('match', function () {
                    scope.doconfirm(attrs.match);
                });
            }
        };
    })
    .controller('facebookCtrl', function ($routeParams) {
        Auth.facebook($routeParams.token);
        $location.path('/');
    });
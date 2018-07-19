angular.module('mainController', ['authServices'])

    .controller('mainCtrl', function (Auth, $interval, $location, $window, $timeout, $rootScope) {
        var app = this;
        app.loadme = false;

        app.checkSession= function(){
            if(Auth.isLoggedIn()){
                app.checkingSession= true;
                var interval = $interval(function(){
                    var token = $window.localStorage.getItem('token'); 
                    if(token === null){
                        $interval.cancel(interval);
                    }
                },2000);
            }
        };
        app.checkSession();

        $rootScope.$on('$routeChangeStart', function () {
            if(!app.checkingSession) app.checkSession();
            
            if (Auth.isLoggedIn()) {
                console.log('Success! user is logged in');
                app.isLoggedIn = true;
                Auth.getUser().then(function (data) {
                    app.username = data.data.username;
                    app.email = data.data.email;
                });
                app.loadme = true;
            } else {
                console.log('Failure! user is not logged in');
                app.username = '';
                app.isLoggedIn = false;
                app.loadme = true;

            }
            
        });

        this.loginUser = function (loginData) {
            app.errorMsg = false;

            Auth.login(app.loginData).then(function (data) {
                if (data.data.success) {
                    app.successMsg = data.data.message;
                    $timeout(function () {
                        $location.path('/about');
                        app.loginData = '';
                        app.successMsg = false;
                        app.checkSession();
                    }, 2000);
                } else {
                    app.errorMsg = data.data.message;
                }
            });
        };

        this.logout = function () {
            Auth.logout();
            $location.path('/logout');
            $timeout(function () {
                $location.path('/');
            }, 2000);
        };
    });
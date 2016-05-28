class RouteConfig {
    public static inject: string[] = [
        $common.angular.$routeProvider,
        $common.angular.$locationProvider
    ];

    constructor(
        private $routeProvider: angular.route.IRouteProvider,
        private $locationProvider: angular.ILocationProvider) {

        $locationProvider.html5Mode({
            enabled: true
        });

        $routeProvider.when('/profile', {
            templateUrl: 'app/views/profileView.html'
        });

        $routeProvider.when('/home', {
            templateUrl: 'app/views/homeView.html'
        });

        $routeProvider.when('/singup', {
            templateUrl: 'app/views/singup.html'
        });

        $routeProvider.when('/login', {
            templateUrl: 'app/views/login.html'
        });

         $routeProvider.otherwise({
            templateUrl: "app/views/mainView.html"
         });
    }
}

angular.module($app.name).config(RouteConfig);
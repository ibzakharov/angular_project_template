class MainController {
    public static inject: string[] = [
        $common.angular.$locationService,
        $app.services.data,
        $app.services.route,
        $app.services.log
    ];

    constructor(
        private $location: angular.ILocationService,
        public membership: DataService,
        public route: RouteService,
        private log: LogService) {
        $location.path('home');
    }

    public userIsAuth(): boolean {
        return this.membership.isUserAuthenticated();
    }

    public getUserName(): string {
        if (this.userIsAuth()) {
            const user: User = this.membership.getLoggedInUser();
            return user.userName;
        }
        return 'Account';
    }

    public logout(): void {
        this.membership.logout()
            .success(response => {
                localStorage.removeItem($app.localStorage.user);
                this.log.success('You have successfully logged out');
            })
            .error(error => {
                this.log.error(error.message);
            });
    }

    public tabIsActive(viewLocation): boolean {
        return viewLocation === this.$location.path();
    }
}

angular.module($app.name).controller('mainCtrl', MainController);
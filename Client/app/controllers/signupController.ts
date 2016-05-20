class SignupController {
    public static inject: string[] = [
        $app.services.data,
        $common.angular.$httpService,
        $app.services.log
    ];

    constructor(
        private membership: DataService,
        private route: RouteService,
        private $http: angular.IHttpService,
        private log: LogService) {
    }

    public newUser: User;

    public register(newUser: User): void {

        this.membership.singup(newUser)
            .success((response: User) => {
                this.log.success(`Dear ${response.userName}, please login with your credentials`);
                // todo Go to any page
            })
            .error((error) => {
                if (!error) {
                    this.log.error($common.errors.webServiceNotAvailable);
                }
            });
    };
}

angular.module($app.name).controller('signupCtrl', SignupController);


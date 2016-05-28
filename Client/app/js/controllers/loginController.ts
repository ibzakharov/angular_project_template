class LoginController {
    public static inject: string[] = [
        $app.services.data,
        $app.services.log
    ];

    public user: User;

    constructor(
        private membership: DataService,
        private log: LogService) {
    }

    public login(user: User): void {

        this.membership.login(user)
            .success((result: User) => {
                this.log.success('Welcome back ' + result.userName + '!');
                localStorage.setItem($app.localStorage.user, JSON.stringify(result));

            })
            .error((error) => {
                if (!error) {
                    this.log.error($common.errors.webServiceNotAvailable, error);
                }
            });
    };

}

angular.module($app.name).controller('loginCtrl', LoginController);


class DataService {

    public static inject: string[] = [
        $common.angular.$httpService
    ];

    constructor(
        private $http: angular.IHttpService) {
    }

    public singup(newUser: User): angular.IHttpPromise<any> {
        return this.$http.post($app.urls.api.userSignup, JSON.stringify(newUser));
    }

    public login(user: User): angular.IHttpPromise<any> {
        return this.$http.post($app.urls.api.userLogin, JSON.stringify(user));
    }

    public logout(): angular.IHttpPromise<any> {
        return this.$http.post($app.urls.api.userLogout, {});
    }

    public isUserAuthenticated(): boolean {
        const user: User = localStorage.getItem($app.localStorage.user);
        if (user !== null) {
            return true;
        }
        return false;
    }

    public getLoggedInUser(): User {
        let user: User = undefined;

        if (this.isUserAuthenticated()) {
            user = JSON.parse(localStorage.getItem($app.localStorage.user));
        }

        return user;
    }
}

angular.module($app.name).service($app.services.data, DataService);




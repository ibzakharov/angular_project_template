
interface IUserCurrency {
    currencyName: string;
    email: string;
}

interface IUserSession {
    sessionId: number;
    userId: number;
    userName: string;
    userRole: string[];
}

class AuthService {

    public static inject: string[] = [
    ];

    public session: IUserSession = {
        sessionId: undefined,
        userId: undefined,
        userName: undefined,
        userRole: undefined
    };

    private clearSession(): void {
        this.session.sessionId = undefined;
        this.session.userId = undefined;
        this.session.userName = undefined;
        this.session.userRole = undefined;
    };

    public login(credentials: any): boolean {
        if (credentials.userName === 'ibzakharov@gmail.com' && credentials.password === '1') {
            this.session.sessionId = 1;
            this.session.userId = 1;
            this.session.userName = 'Ivan';
            this.session.userRole = [$common.common.userRoles.admin];
            console.log('login');
            return true;
        }
        return false;
    }

    public logout(): void {
        console.log('logout');
        this.clearSession();
    }

    public isAuthenticated(): boolean {
        return !!this.session.userId;
    }
}

angular.module($app.name).service($app.services.auth, AuthService);

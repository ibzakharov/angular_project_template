class User extends Base {
    public userName: string;
    public password: string;
    public email: string;
    public isAdmin: boolean;
    public isLocked: boolean;
    public isDeleted: boolean;

    constructor(userName: string, email: string, password: string) {
        super();
        this.userName = userName;
        this.password = password;
        this.email = email;
    }
}
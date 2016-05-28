namespace $app {
    'use strict';

    export const name: string = 'app';

    export namespace services {
        export const auth: string = 'auth';
        export const log: string = 'log';
        export const market: string = 'market';
        export const route: string = 'route';
        export const data: string = 'membership';
    }

    export namespace localStorage {
        export const user: string = 'user';
    }

    export namespace urls {
        export const host = 'http://localhost:1330/';

        export namespace api {
            export const userSignup: string = urls.host + 'user/signup';
            export const userLogin: string = urls.host + 'user/login';
            export const userLogout: string = urls.host + 'user/logout';
        }
    }
}
namespace $common {
    'use strict';

    export const environmentConfig: string = 'environment-config';
    export const logo: string = 'logo-path';
    export const emptyString = '';

    export namespace material {
        export const $mdToast: string = '$mdToast';
        export const $mdDialog: string = '$mdDialog';
        export const $mdSidenav: string = '$mdSidenav';
        export const $mdMedia: string = '$mdMedia';
    }

    export namespace translate {
        export const $translateService: string = '$translate';
        export const $translateProvider: string = '$translateProvider';
    }

    export namespace angular {
        export const $routeProvider: string = '$routeProvider';
        export const $locationProvider: string = '$locationProvider';
        export const $parse: string = '$parse';
        export const $provide: string = '$provide';
        export const $log: string = '$log';
        export const $locale: string = '$locale';
        export const $animate: string = '$animate';
        export const $rootElement: string = '$rootElement';
        export const $templateCache: string = '$templateCache';
        export const $logProvider: string = '$logProvider';
        export const $interpolate: string = '$interpolate';
        export const $injector: string = '$injector';
        export const $scope: string = '$scope';
        export const $rootScope: string = '$rootScope';
        export const $filter: string = '$filter';
        export const $controller: string = '$controller';
        export const $httpService: string = '$http';
        export const $httpProvider: string = '$httpProvider';
        export const $qService: string = '$q';
        export const $timeoutService: string = '$timeout';
        export const $window: string = '$window';
        export const $locationService: string = '$location';
        export const $localStorageService: string = 'localStorageService';
    }

    export namespace toastr {
        export const toastrService = 'toastr';
    }

    export namespace uirouter {
        export const $stateProvider: string = '$stateProvider';
        export const $urlRouterProvider: string = '$urlRouterProvider';
        export const $stateParams: string = '$stateParams';
        export const $state: string = '$state';
    }

    export namespace vendors {
        export namespace nodejs {
            export namespace streams {
                export const dataEvent = 'data';
                export const endEvent = 'end';
                export const errorEvent = 'error';
            }
        }
    }

    export namespace errors {
        export const webServiceNotAvailable = 'Web service is not available';
    }

    export namespace common {

        export namespace authEvents {
            export const loginSuccess: string = 'auth-login-success';
            export const loginFailed: string = 'auth-login-failed';
            export const logoutSuccess: string = 'auth-logout-success';
            export const sessionTimeout: string = 'auth-session-timeout';
            export const notAuthenticated: string = 'auth-not-authenticated';
            export const notAuthorized: string = 'auth-not-authorized';
        }

        export namespace userRoles {
            export const all: string = '*';
            export const admin: string = 'admin';
            export const editor: string = 'editor';
            export const guest: string = 'guest';
        }

        export namespace ecurrencies {
            export const perfectMoney = 'Perfect Money';
            export const okpay = 'OKPay';
            export const bitcoin = 'Bitcoin';
            export const webmoney = 'WebMoney';
            export const netTeller = 'Netteller';
            export const payza = 'Payza';
            export const solidTrust = 'SolidTrust Pay';
            export const payeer = 'Payeer';
            export const skrill = 'Skrill';
            export const payPal = 'PayPal';
        }

        export namespace paths {
            export const confirmPurchase = 'confirmPurchase';
            export const confirmSale = 'confirmSale';
            export const home: string = 'home';
        }

        export namespace searchItems {
            export const trade = 'trade';
        }
    }
}
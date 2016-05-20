'use strict';

class RouteService {

    public static inject: string[] = [
        $common.angular.$locationService
    ];

    constructor(
        private $location: angular.ILocationService) {
    }

    public toHome(): void {
        this.$location.search($common.emptyString);
        this.$location.path($common.common.paths.home);
    }
}

angular.module($app.name).service($app.services.route, RouteService);

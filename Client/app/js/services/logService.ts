class LogService {
    public static inject: string[] = [
        $common.toastr.toastrService,
        $common.angular.$log
    ];

    constructor(
        private toastr: angular.toastr.IToastrService,
        private $log: ng.ILogService) {
    }

    public log(...args: any[]): void {
        this.$log.log(args);
    }

    public error(message: string, data?: {}, title?: string): void {
        this.toastr.error(message, title);
        this.$log.error(`Error: ${message}\nSummary: ${title}\nDetails: ${data}`);
    }

    public info(message: string, data?: {}, title?: string): void {
        this.toastr.info(message, title);
        this.$log.info(`Error: ${message}\nSummary: ${title}\nDetails: ${data}`);
    }

    public success(message: string, data?: {}, title?: string): void {
        this.toastr.success(message, title);
        this.$log.info(`Error: ${message}\nSummary: ${title}\nDetails: ${data}`);
    }

    public warning(message: string, data?: {}, title?: string): void {
        this.toastr.warning(message, title);
        this.$log.warn(`Error: ${message}\nSummary: ${title}\nDetails: ${data}`);
    }
}

angular.module($app.name).service('log', LogService);
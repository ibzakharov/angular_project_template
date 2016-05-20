class OperationResult {
    public Succeeded: boolean;
    public Message: string;

    constructor(succeeded: boolean, message?: string) {
        this.Succeeded = succeeded;
        this.Message = message;
    }
}
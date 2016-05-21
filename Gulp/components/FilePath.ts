import Path = require('path');

export default class FilePath {
    public ext:string;
    public fullName:string;

    constructor(public route:string, public name:string) {
        this.ext = Path.extname(name);
        this.fullName = Path.join(route, name);
    }

    Not = ():string => {
        return "!" + this.fullName;
    };

    toString() {
        return this.fullName;
    }
}
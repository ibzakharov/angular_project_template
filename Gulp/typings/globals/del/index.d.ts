// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7de6c3dd94feaeb21f20054b9f30d5dabc5efabd/del/del.d.ts
declare module "del" {
    import glob = require("glob");

    function Del(pattern: string): Promise<string[]>;
    function Del(pattern: string, options: Del.Options): Promise<string[]>;

    function Del(patterns: string[]): Promise<string[]>;
    function Del(patterns: string[], options: Del.Options): Promise<string[]>;

    namespace Del {
        function sync(pattern: string, options?: Options): string[];
        function sync(patterns: string[], options?: Options): string[];

        interface Options extends glob.IOptions {
            force?: boolean;
            dryRun?: boolean;
        }
    }

    export = Del;
}
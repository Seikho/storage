declare module "ls-storage" {
    var store: Storage;
    export =  store;
}

interface Storage {
    (key: string): any;
    <T>(key: string): T;
    (key: string, value: any): void;
}
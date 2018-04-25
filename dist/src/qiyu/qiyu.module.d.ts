import { InjectionToken, ModuleWithProviders } from "@angular/core";
export declare const QIYU_KEY: InjectionToken<{}>;
export declare class QiyuModule {
    constructor(key: string);
    static forRoot(key: string): ModuleWithProviders;
}

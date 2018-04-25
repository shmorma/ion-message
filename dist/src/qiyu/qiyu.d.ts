export declare class Qiyu {
    static readonly initialized: boolean;
    static ready(): Promise<Qiyu>;
    static url(): any;
    /**
     *
     * @param {QiyuConfig} config
     */
    private static ysf();
}
export interface QiyuConfig {
    uid: string;
    name?: string;
    email?: string;
    mobile?: string;
}

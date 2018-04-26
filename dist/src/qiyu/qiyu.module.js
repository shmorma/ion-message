import { Inject, InjectionToken, NgModule } from "@angular/core";
export var QIYU_KEY = new InjectionToken("qiyu_key");
var QiyuModule = /** @class */ (function () {
    function QiyuModule(key) {
        var script = document.createElement("script");
        script.src = "https://qiyukf.com/script/" + key + ".js?hidden=1";
        document.head.appendChild(script);
    }
    QiyuModule.forRoot = function (key) {
        return {
            ngModule: QiyuModule,
            providers: [{ provide: QIYU_KEY, useValue: key }]
        };
    };
    QiyuModule.decorators = [
        { type: NgModule },
    ];
    /** @nocollapse */
    QiyuModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [QIYU_KEY,] },] },
    ]; };
    return QiyuModule;
}());
export { QiyuModule };
//# sourceMappingURL=qiyu.module.js.map
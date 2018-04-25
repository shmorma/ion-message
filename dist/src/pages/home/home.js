import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Qiyu } from "../../qiyu/qiyu";
import { DomSanitizer } from "@angular/platform-browser";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        Qiyu.ready().then(function () {
            _this.url = _this.sanitizer.bypassSecurityTrustResourceUrl(Qiyu.url());
        });
    }
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = function () { return [
        { type: NavController, },
        { type: DomSanitizer, },
    ]; };
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map
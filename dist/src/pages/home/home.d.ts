import { NavController } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";
export declare class HomePage {
    navCtrl: NavController;
    private sanitizer;
    url: any;
    constructor(navCtrl: NavController, sanitizer: DomSanitizer);
}

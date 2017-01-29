import { TranslateService } from 'ng2-translate';
import { Injectable } from "@angular/core";

import { AlertController, NavController, App } from "ionic-angular";

import { PageHome } from "../pages/pageHome/pageHome";

@Injectable()
export class PageProvider {
    private navCtrl: NavController;
    private alertCtrl: AlertController;

    constructor(private app: App, private translate: TranslateService) {
        this.navCtrl = app.getActiveNav();
        this.alertCtrl = new AlertController(app);
    }

    public goHome() {
        this.navCtrl.setPages([
            { page: PageHome }
        ]);
    }

    public alert(message: string, title: string): Promise<any> {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ["OK"]
        });

        return alert.present();
    }

    public confirm(message: string, title: string, ok: Function, cancel?: Function) {
        cancel = cancel || function () { };

        let confirm = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: "Sim",
                    handler: ok
                },
                {
                    text: "Não",
                    handler: cancel
                }
            ]
        });

        confirm.present();
    }

    public getTranslate(key: string, args?: any) {
        return (this.translate.get(key, args) as any).value;
    }
}

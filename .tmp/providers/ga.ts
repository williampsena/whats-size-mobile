import { Injectable } from "@angular/core";

@Injectable()
export class GoogleAnalyticsProvider {
  private ga: any;

  constructor() {
    this.ga = (<any>window).ga;
  }

  trackView(pageName: string) {
    this.ga("send", "pageview", pageName);
  }

  trackEvent(category: string, action: string, label: string, value: any) {
    this.ga("send", "event", category, action, label, value);
  }

  trackException(message: string, fatal: boolean = false){
    this.ga("send", "exception", message, fatal);
  }
}

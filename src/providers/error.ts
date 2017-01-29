import { Injectable, ErrorHandler } from "@angular/core";
import { GoogleAnalyticsProvider } from './ga';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(public ga: GoogleAnalyticsProvider){

  }
  handleError(error) {
    this.ga.trackException(error.message || JSON.stringify(error));
  }
}

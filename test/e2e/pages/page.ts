import { browser } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';

export abstract class Page {
    private readonly route: string;

    constructor(route: string) {
        this.route = route;
    }

    open(): wdpromise.Promise<string> {
        return browser.loadAndWaitForAureliaPage(this.route);
    }

    title(): wdpromise.Promise<string> {
        return browser.getTitle();
    }

    currentUrl(): wdpromise.Promise<string> {
        return browser.getCurrentUrl();
    }
}

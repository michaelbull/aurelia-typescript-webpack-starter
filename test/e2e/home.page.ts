import * as webdriver from 'selenium-webdriver';
import {
    element,
    by
} from 'protractor';

export function heading(): webdriver.promise.Promise<string> {
    return element(by.tagName('h1')).getText();
}

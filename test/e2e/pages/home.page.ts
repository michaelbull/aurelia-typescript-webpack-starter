import { Page } from './page';
import {
    ElementFinder,
    element,
    by
} from 'protractor';

export class HomePage extends Page {
    readonly heading: ElementFinder = element(by.tagName('h1'));

    constructor() {
        super('/');
    }
}

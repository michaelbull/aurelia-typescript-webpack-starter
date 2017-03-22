import { browser } from 'aurelia-protractor-plugin/protractor';
import { heading } from './home.page';

describe('home page', () => {
    beforeEach(() => {
        browser.loadAndWaitForAureliaPage('/');
    });

    it('should set the page title', () => {
        expect<any>(browser.getTitle()).toBe('Home | My Aurelia App');
    });

    it('should set the page heading', () => {
        expect<any>(heading()).toBe('Home page');
    });
});

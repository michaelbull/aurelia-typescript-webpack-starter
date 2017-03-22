import { HomePage } from './pages/home.page';

describe('home page', () => {
    let page: HomePage;

    beforeAll(() => {
        page = new HomePage();
        page.open();
    });

    it('should set the page title', () => {
        expect<any>(page.title()).toBe('Home | My Aurelia App');
    });

    it('should set the page heading', () => {
        expect<any>(page.heading.getText()).toBe('Home page');
    });
});

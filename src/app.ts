import {
    ConfiguresRouter,
    Router,
    RouterConfiguration
} from 'aurelia-router';

export class App implements ConfiguresRouter {
    configureRouter(config: RouterConfiguration, router: Router): void {
        config.title = 'My Aurelia App';

        config.mapRoute({
            route: '',
            moduleId: './pages/home',
            nav: true,
            title: 'Home'
        }).mapUnknownRoutes('./pages/not-found');
    }
}

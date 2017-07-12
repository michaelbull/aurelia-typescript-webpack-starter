import { PLATFORM } from 'aurelia-framework';
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
            moduleId: PLATFORM.moduleName('./pages/home'),
            name: 'home',
            title: 'Home',
            nav: true
        }).mapUnknownRoutes(PLATFORM.moduleName('./pages/not-found'));
    }
}

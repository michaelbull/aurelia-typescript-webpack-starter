import {
    Aurelia,
    PLATFORM
} from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {
    aurelia.use.standardConfiguration();

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}

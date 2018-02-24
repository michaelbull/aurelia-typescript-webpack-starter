import {
    Aurelia,
    PLATFORM
} from 'aurelia-framework';

export async function configure(aurelia: Aurelia): Promise<void> {
    aurelia.use.standardConfiguration();

    if (process.env.NODE_ENV !== 'production') {
        aurelia.use.developmentLogging();
    }

    await aurelia.start();
    await aurelia.setRoot(PLATFORM.moduleName('app'));
}

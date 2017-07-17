import { bootstrap } from 'aurelia-bootstrapper';
import { PLATFORM } from 'aurelia-pal';
import {
    ComponentTester,
    StageComponent
} from 'aurelia-testing';

describe('ExampleComponent', () => {
    let component: ComponentTester;

    beforeEach(async () => {
        component = StageComponent
            .withResources(PLATFORM.moduleName('src/example'))
            .inView('<example></example>');

        await component.create(bootstrap);
    });

    it('should render first name', () => {
        let element: HTMLParagraphElement = document.querySelector('#example') as HTMLParagraphElement;
        expect(element.innerText).toBe('Hello world');
    });

    afterEach(() => {
        component.dispose();
    });
});

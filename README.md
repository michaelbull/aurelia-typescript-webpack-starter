<p align="center">
  <a href="#">
    <img src="./logo.png" alt="aurelia-typescript-webpack-starter" />
  </a>
</p>

<br />

# Aurelia + TypeScript + Webpack Starter Kit

A minimal [Aurelia][aurelia] starter kit written in [TypeScript][typescript] and
built using [webpack][webpack].

## Building

The project can be built by running `npm run build` which will assemble the
distribution under the `./dist` directory. This directory can be cleaned by
running `npm run clean`.

## Developing

The [webpack-dev-server][dev-server] is installed for development purposes and
can be run with the command `npm start`. This will start the development
server at [`http://localhost:8080`][localhost] and open it in your browser, with
[inline mode][inline] and [hot module replacement][hmr] enabled.

## Testing

### Unit Testing

Unit tests are written using [Jasmine][jasmine] and ran with [Karma][karma].
Test specifications belong under the [`test/unit`](test/unit) directory and must
have the `.spec.ts` file extension.

You can either run the tests once with `npm test`, or run Karma in auto-watch
mode (watch files and execute the tests whenever a file is changed) with the
command `npm run test:watch`.

### End-to-End Testing

E2E tests are written using [Protractor][protractor]. Test specifications belong
under the [`test/e2e`](test/e2e) directory and must have the `.e2e.ts` file
extension.

You install the Selenium WebDriver and run the E2E tests with `npm run e2e`. If
you want to skip the installation of the WebDriver and just run the tests,
instead run `npm run e2e:run`.

When debugging you can enable Protractor's
[interactive mode][protractor-interactive] by running `npm run e2e:debug`.

## License

This project is available under the terms of the ISC license. See the
[`LICENSE`][license] file for the copyright information and licensing terms.

[aurelia]: http://aurelia.io/
[webpack]: https://webpack.github.io/
[typescript]: https://www.typescriptlang.org/
[jasmine]: https://jasmine.github.io/
[karma]: https://karma-runner.github.io/
[protractor]: http://www.protractortest.org/
[protractor-interactive]: https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively
[dev-server]: https://github.com/webpack/webpack-dev-server
[localhost]: http://localhost:8080
[inline]: https://webpack.github.io/docs/webpack-dev-server.html#inline-mode
[hmr]: https://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement
[license]: LICENSE

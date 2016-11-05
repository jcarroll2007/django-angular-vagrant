# Angular 1.5/Webpack/Karma/ES2015 Seed Project

## Overview
This repo is a seed project that can be reused for quickly bootstraping a new Angular 1.5 project. It uses webpack for the build process and allows tests to be written using Karma / Jasmine and ES2015. The structure of the code closely follows [Todd Motto's Angular 1.x ES2015 Styleguide](https://github.com/toddmotto/angular-styleguide).

## Usage
 - git clone this repo
 - `npm run build` - production build
    - includes eslint
 - `npm run develop` - development build (stand up server and watch for changes)
    - includes eslint
 - `npm run test` - run karma and watch for changes
    - includes eslint

## npm Dependency Notes
 - [angular-mocks](https://github.com/angular/bower-angular-mocks) - I believe this is needed to be able to write tests in ES6
 - [isparta-loader](https://github.com/deepsweet/isparta-loader) - **this library has been deprecated in favor of** [babel-plugin-istanbull](https://github.com/istanbuljs/babel-plugin-istanbul), but I was unable to get the babel istanbull plugin working properly, so I fell back to `isparta-loader` for now.
 - webpack-loader - any package that ends in `-loader` is a webpack loader that handles processing of a specific type of file
 - I think all other dependencies should be relatively self explanatory

## Generators

### Component
This generator creates a new routed component template.

#### Usage
```
npm run create-component -- --name component-name --path the/components/path
```
*Note: The first `--` after `create-component` may not be necessary depending on the version of node you are using.*

 - `name` - name will be used to generate the filenames and the name of the new angular component
 - `path` - the path is the path to the directory where the new component should be created. Most likely this will be the path to the parent directory.
 - `module-name` - the name of the angular module that is created (defaults to `name`)
 - `state` - uiRouter state name (defaults to `name`)

#### Example
```
npm run create-component -- --name manage --path common/users --state users.manage --module-name users.manage
```
Running this would yield -

```
src/common
|
|___users
    |
    |___manage
        |   manage.html
        |   manage.js
        |   manage.scss
```

After the new files are generated, you will need to import the new component into your parent module and add it as a module dependency.

## TODO
- [ ] Configure build properly (it is not ready for production)
- [ ] Verify that packages are not imported more than once
- [ ] There was something else that had to do with test, but I can't remember
- [x] Create component generator
 - [ ] polish the component generator - file name should be the same as the directory
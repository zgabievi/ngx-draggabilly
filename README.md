# ngx-draggabilly

[![NPM Version](https://img.shields.io/npm/v/ngx-draggabilly.svg?style=flat-square)](https://www.npmjs.com/package/ngx-draggabilly)
[![NPM Size + Gzip](https://img.shields.io/bundlephobia/minzip/ngx-draggabilly.svg?style=flat-square)](https://www.npmjs.com/package/ngx-draggabilly)
[![NPM Downloads](https://img.shields.io/npm/dt/ngx-draggabilly.svg?style=flat-square)](https://www.npmjs.com/package/ngx-draggabilly)
[![NPM License](https://img.shields.io/npm/l/ngx-draggabilly.svg?style=flat-square)](https://www.npmjs.com/package/ngx-draggabilly)

Angular 2+ wrapper package around [Draggabilly by Desandro](https://draggabilly.desandro.com). Make that shiz draggable.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Changelog](#changelog)
- [Paperwork](#paperwork)
  - [Contributing](#contributing)
  - [Issue / Feature Request](#issue--feature-request)
  - [Pull Request](#pull-request)
- [Credits](#credits)
- [License](#license)

## Installation

```bash
npm install --save ngx-draggabilly
```

```bash
yarn add ngx-draggabilly
```

## Usage

**app.module.ts**

```ts
import { NgModule } from '@angular/core';
import { NgxDraggabillyModule } from 'ngx-draggabilly';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ NgxDraggabillyModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

**app.component.html**

```html
<div draggabilly>DRAG ME!</div>
```

### Options

You can pass options input to container element;

```html
<div draggabilly [options]="{ axis: 'x' }">DRAG ME!</div>
```

or create object inside **app.component.ts** using interface `NgxDraggabillyOptions` and pass to element;

```ts
draggieOptions: NgxDraggabillyOptions = {
  axis: 'y',
  handle: '.handle'
};
```

```html
<div draggabilly [options]="draggieOptions">
  <div class="handle">HOLD HERE</div>
  & DRAG ME...
</div>
```

More information about options can be found [here](https://draggabilly.desandro.com/#options).

### Events

Draggable element outputs some events;

For example: "Triggered when dragging starts and the element starts moving. Dragging starts after the user's pointer has moved a couple pixels to allow for clicks.";

```html
<div draggabilly (dragStart)="handleDragStart($event)">DRAG ME!</div>
```

Full list of events can be found [here](https://draggabilly.desandro.com/#events).

### Methods

If you want to call some methods on draggabilly element, you can use service created speacially for this;

For example if you want to disable dragging you can call:

```ts
constructor(private draggieService: NgxDraggabillyService) {}

disableDrag() {
  this.draggieService.disable();
}
```

Full list of methods can be found [here](https://draggabilly.desandro.com/#methods).

## Changelog

Please see [Changelog Page](https://github.com/zgabievi/ngx-draggabilly/releases) for more information what has changed recently.

## Paperwork

### Contributing

Please see [CONTRIBUTING.md](https://github.com/zgabievi/ngx-draggabilly/blob/master/CONTRIBUTING.md) for details.

### Issue / Feature Request

To submit an issue correctly, please follow [instructions](https://github.com/zgabievi/ngx-draggabilly/blob/master/.github/ISSUE_TEMPLATE.md#bug-report)

If you have an idea, and you want to request feature, then read [this one](https://github.com/zgabievi/ngx-draggabilly/blob/master/.github/ISSUE_TEMPLATE.md#feature-request)

### Pull Request

To crearte new pull request and add your piece of work in our project, go through this [steps](https://github.com/zgabievi/ngx-draggabilly/blob/master/.github/PULL_REQUEST_TEMPLATE.md)

## Credits

- [Zura Gabievi](https://github.com/zgabievi)
- [All contributors](https://github.com/zgabievi/ngx-draggabilly/graphs/contributors)

## License

The MIT License (MIT). Please see [License file](https://github.com/zgabievi/ngx-draggabilly/blob/master/LICENSE) for more information.

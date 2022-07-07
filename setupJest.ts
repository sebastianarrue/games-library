import 'jest-preset-angular';
import 'zone.js';
import 'zone.js/testing';

import { Component, EventEmitter } from '@angular/core';
/**
 * Examples:
 * MockComponent({selector: 'some-component'});
 * MockComponent({selector: 'some-component', inputs: ['some-input', 'some-other-input']});
 */
export function MockComponent(selector: string, options: any = {}): Component {
  const metadata: Component = {
    selector,
    template: options.template || '',
    inputs: options.inputs || [],
    outputs: options.outputs || [],
    exportAs: options.exportAs || '',
  };
  class Mock {
    [index: string]: any;
    constructor() {
      metadata.outputs?.forEach((method) => {
        this[method] = new EventEmitter<any>();
      });
    }
  }
  return Component(metadata)(Mock as any);
}

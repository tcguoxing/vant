import './plugin';
import Locale from '../src/locale';
import enUS from '../src/locale/lang/en-US';

Locale.use('en-US', enUS);

// promisify setTimeout
// 这是由package.json进来的。
export function later(delay = 0): Promise<void> {
  // ts语法，返回一个Promise
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export * from './dom';
export * from './event';
export { mount } from '@vue/test-utils';

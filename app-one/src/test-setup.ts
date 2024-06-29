import 'jest-preset-angular/setup-jest';
import { TextDecoder, TextEncoder } from 'util';

// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true
  }
};

globalThis.TextEncoder = TextEncoder;
(globalThis as any).TextDecoder = TextDecoder;

/** @jest-environment ./packages/test/harness/src/host/jest/WebDriverEnvironment.js */

describe('with Web Worker upload a picture with custom thumbnail size', () => {
  test('should send', () => runHTML('upload/withWebWorker/customThumbnailSize'));
});

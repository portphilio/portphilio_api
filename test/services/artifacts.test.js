const app = require('../../src/app');

describe('\'artifacts\' service', () => {
  it('registered the service', () => {
    const service = app.service('artifacts');
    expect(service).toBeTruthy();
  });
});

import App from '../../src/scripts/app.js'

describe('App', () => {
  let subject;
  beforeEach(() => {
    subject = new App;
  });

  it('works', () => {
    expect(subject.foo()).toBe(true)
  });
});
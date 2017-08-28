import { GroveTimePage } from './app.po';

describe('grove-time App', () => {
  let page: GroveTimePage;

  beforeEach(() => {
    page = new GroveTimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

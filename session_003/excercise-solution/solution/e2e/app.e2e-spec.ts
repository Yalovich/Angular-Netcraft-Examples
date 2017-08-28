import { SolutionPage } from './app.po';

describe('solution App', () => {
  let page: SolutionPage;

  beforeEach(() => {
    page = new SolutionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

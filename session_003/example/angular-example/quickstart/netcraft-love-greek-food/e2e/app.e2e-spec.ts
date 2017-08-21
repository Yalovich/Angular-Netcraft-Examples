import { NetcraftLoveGreekFoodPage } from './app.po';

describe('netcraft-love-greek-food App', () => {
  let page: NetcraftLoveGreekFoodPage;

  beforeEach(() => {
    page = new NetcraftLoveGreekFoodPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

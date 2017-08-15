import { TiptiWebPage } from './app.po';

describe('tipti-web App', () => {
  let page: TiptiWebPage;

  beforeEach(() => {
    page = new TiptiWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { BgxLegionPage } from './app.po';

describe('bang-ui App', () => {
  let page: BgxLegionPage;

  beforeEach(() => {
    page = new BgxLegionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

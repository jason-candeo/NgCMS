import { NgCMSPage } from './app.po';

describe('ng-cms App', () => {
  let page: NgCMSPage;

  beforeEach(() => {
    page = new NgCMSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

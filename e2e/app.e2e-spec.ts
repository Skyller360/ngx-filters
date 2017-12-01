import { NgxFiltersPage } from './app.po';

describe('ngx-filters App', () => {
  let page: NgxFiltersPage;

  beforeEach(() => {
    page = new NgxFiltersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

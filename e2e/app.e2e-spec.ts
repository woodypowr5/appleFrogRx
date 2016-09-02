import { AppleFrogRxPage } from './app.po';

describe('apple-frog-rx App', function() {
  let page: AppleFrogRxPage;

  beforeEach(() => {
    page = new AppleFrogRxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

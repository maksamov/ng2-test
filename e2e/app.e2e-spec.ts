import { KeeperTestAPIPage } from './app.po';

describe('keeper-test-api App', function() {
  let page: KeeperTestAPIPage;

  beforeEach(() => {
    page = new KeeperTestAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

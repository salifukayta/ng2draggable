import { Ng2draggableWebsitePage } from './app.po';

describe('ng2draggable-website App', function() {
  let page: Ng2draggableWebsitePage;

  beforeEach(() => {
    page = new Ng2draggableWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Todos3marzoPage } from './app.po';

describe('todos3marzo App', () => {
  let page: Todos3marzoPage;

  beforeEach(() => {
    page = new Todos3marzoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { TestAngularLazyLoadingPage } from './app.po';

describe('test-angular-lazy-loading App', () => {
    let page: TestAngularLazyLoadingPage;

    beforeEach(() => {
        page = new TestAngularLazyLoadingPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});

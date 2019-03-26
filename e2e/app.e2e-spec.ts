import { AngularDviEstimatorPage } from './app.po';

describe('angular-dvi-estimator App', () => {
  let page: AngularDviEstimatorPage;

  beforeEach(() => {
    page = new AngularDviEstimatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

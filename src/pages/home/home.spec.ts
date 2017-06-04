import { HomePage } from './home';

describe('Home Page', () => {
  let homePage = null;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should return a non empty array', () => {
    let result = homePage.ionViewDidLoad();

    expect(Array.isArray(result)).toBeTruthy;
    expect(result.length).toBeGreaterThan(0);
  });

  it('should return an array(object)', () => {
    expect(typeof homePage.ionViewDidLoad()).toBe('object');
  });
});

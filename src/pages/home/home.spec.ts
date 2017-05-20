import { HomePage } from './home';

let homePage = null;

describe('Home Page', () => {
  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should return a non empty array', () => {
    let result = homePage.ionViewDidLoad();

    expect(Array.isArray(result)).toBeTruthy;
    expect(result.length).toBeGreaterThan(0);
  });

  it('should return an array with strings', () => {
    expect(typeof homePage.ionViewDidLoad()).toBe('object');
  });
});

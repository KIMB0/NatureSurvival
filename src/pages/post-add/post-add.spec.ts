import { PostAddPage } from './post-add';


describe('Post-Add Page', () => {
  let postAddPage = null;

  beforeEach(() => {
    postAddPage = new PostAddPage();
  });

  it('should return undefined variables', () => {

    expect(postAddPage.name).toBe(undefined);
    expect(postAddPage.title).toBe(undefined);
    expect(postAddPage.description).toBe(undefined);
  });

  it('should return a random string with at least 12 caracters', () => {

    postAddPage.getRandomNumber();

    expect(postAddPage.randomNumberString.length).toBeGreaterThan(16);
  })
})

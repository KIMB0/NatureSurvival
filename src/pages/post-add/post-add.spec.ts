import { PostAddPage } from './post-add';
import {} from 'jasmine';


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

  it('should return a random string with at least 17 caracters', () => {

    postAddPage.getRandomNumber();

    expect(postAddPage.randomNumberString.length).toBeGreaterThan(16);
  });

  it('should return a random string with ".jpg" in it', () => {

    postAddPage.getRandomNumber();

    expect(postAddPage.randomNumberString).toContain(".jpg");
    console.log(postAddPage.randomNumberString);
  });
})

import ReviewBox from './ReviewBox.js';

describe('countWords', () => {
  it('should produce object with word count', () => {
    const reviewBox = new ReviewBox();
    const words = ["Hello World World!"];
    expect(reviewBox.countWords(words).hello).toEqual(1);
    expect(reviewBox.countWords(words).world).toEqual(2);
  });
});

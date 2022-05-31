const sum = (x: number, y: number) => {
  return x + y;
};

describe('This is a test', () => {
  it('it should get', () => {
    expect(sum(10, 20)).toBe(30);
  });
});

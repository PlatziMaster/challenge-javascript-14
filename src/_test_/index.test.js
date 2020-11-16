const { diamond } = require ('../index');

describe('diamond', () => {

  it('should receive positive numbers and odd numbers', () => {
    expect(diamond(-1)).toBe(null);
    expect(diamond(-3)).toBe(null);
    expect(diamond(2)).toBe(null);
    expect(diamond(4)).toBe(null);
    expect(diamond(12)).toBe(null);
  });

  it('should a diamond with size 3', () => {
    expect(diamond(3)).toBe(' *\n***\n *\n');
  });

  it('should a diamond with size 5', () => {
    expect(diamond(5)).toBe('  *\n ***\n*****\n ***\n  *\n');
  });

  it('should a diamond with size 7', () => {
    expect(diamond(7)).toBe('   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n');
  });

  it('should a diamond with size 9', () => {
    expect(diamond(9)).toBe('    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *\n');
  });

  it('should a diamond with size 15', () => {
    expect(diamond(15)).toBe('       *\n      ***\n     *****\n    *******\n   *********\n  ***********\n *************\n***************\n *************\n  ***********\n   *********\n    *******\n     *****\n      ***\n       *\n');
  });
});

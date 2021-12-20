const Family = require('./familyTree')

describe('Family Class', () => {
  const testFamily = new Family('John', ['James', 'Grace'])

  test('has as a name', () => {
    // specific test
    expect(testFamily.name).toBe('John')
  })
  test('has parents', () => {
    // specific test
    expect(testFamily.parents).toContain('James', 'Grace')
  })
  test('is child of', () => {
    // specific test
    expect(testFamily.childOf()).toBe(`John has parents James and Grace`)
  })
})

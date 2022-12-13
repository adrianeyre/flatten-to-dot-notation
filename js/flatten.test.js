const flatten = require('./flatten');

describe('flatten', () => {
  describe('dealing with invalid values', () => {
    test('should throw an error if input is an integer', () => {
      let errorMessage;

      try {
        flatten(1);
      } catch (error) {
        errorMessage = error.message;
      }

      expect(errorMessage).toEqual('input should be an object')
    });

    test('should throw an error if input is an string', () => {
      let errorMessage;

      try {
        flatten('a');
      } catch (error) {
        errorMessage = error.message;
      }

      expect(errorMessage).toEqual('input should be an object')
    });
  })

  describe('dealing with simple objects', () => {
    test('should flatten simple object', () => {
      const objectToFlatten = {
        test: 'test'
      }
  
      expect(flatten(objectToFlatten)).toEqual({ test: 'test'})
    });
  
    test('should flatten multi-level object', () => {
      const objectToFlatten = {
        test: {
          other: 'object'
        }
      }
  
      expect(flatten(objectToFlatten)).toEqual({ 'test.other': 'object' })
    });
  });
  
  describe('dealing with more complex objects', () => {
    test('should flatten multi-level object', () => {
      const objectToFlatten = {
        some: {
            nested: 'data',
            object: {
                with: {
                    nested: 'data',
                },
            },
        },
      };
  
      expect(flatten(objectToFlatten)).toEqual({
        'some.nested': 'data',
        'some.object.with.nested': 'data'
      });
    });
  
    test('should flatten multi-level complex object', () => {
      const objectToFlatten = {
        some: {
          nested: 'data',
          object: {
            with: {
              nested: 'data',
            },
            another: {
              check: 'hello',
            },
          },
        },
      };
  
      expect(flatten(objectToFlatten)).toEqual({
        'some.nested': 'data',
        'some.object.with.nested': 'data',
        'some.object.another.check': 'hello'
      });
    });
  });

  describe('dealing with arrays', () => {
    test('should flatten multi-level complex object with array', () => {
      const objectToFlatten = {
        some: {
          object: [
            {
              check: 'hello'
            }
          ],
        },
      };
  
      expect(flatten(objectToFlatten)).toEqual({
        'some.object[0].check': 'hello',
      });
    });
  
    test('should flatten multi-level complex object with arrays', () => {
      const objectToFlatten = {
        some: {
          object: [
            {
              check: 'hello'
            },
            {
              check: 'hello',
              another: [
                {
                  check: 'hello',
                },
              ],
            },
          ],
        },
      };
  
      expect(flatten(objectToFlatten)).toEqual({
        'some.object[0].check': 'hello',
        'some.object[1].check': 'hello',
        'some.object[1].another[0].check': 'hello',
      });
    });

    test('should flatten an empty array', () => {
      const objectToFlatten = {
        some: {
          object: [],
        },
        other: {
          object: [
            {
              another: [],
            }
          ],
        },
      };
  
      expect(flatten(objectToFlatten)).toEqual({});
    });

    test('should flatten large arrays', () => {
      const objectToFlatten = {
        some: {
          object: [
            {
              item: 1,
            },
            {
              item: 2,
            },
            {
              item: 3,
            },
            {
              item: 4,
            },
            {
              item: 5,
            },
            {
              item: 6,
            },
            {
              item: 7,
            },
            {
              item: 8,
            },
            {
              item: 9,
            },
            {
              item: 10,
            },
            {
              item: 11,
            },
            {
              item: 12,
            },
          ],
        },
      };
  
      expect(flatten(objectToFlatten)).toEqual({
        'some.object[0].item': 1,
        'some.object[1].item': 2,
        'some.object[2].item': 3,
        'some.object[3].item': 4,
        'some.object[4].item': 5,
        'some.object[5].item': 6,
        'some.object[6].item': 7,
        'some.object[7].item': 8,
        'some.object[8].item': 9,
        'some.object[9].item': 10,
        'some.object[10].item': 11,
        'some.object[11].item': 12,
      });
    });
  });
});

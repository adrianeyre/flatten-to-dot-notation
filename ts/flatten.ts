const flatten = (objectToFlatten: object, result: object = {}, stackName: string[] = []): object => {
  if (typeof objectToFlatten !== 'object') throw Error('input should be an object');

  Object.keys(objectToFlatten).forEach((key: string) => {
    if (typeof objectToFlatten[key] !== 'object') {  
      const newKey = [...stackName, key].join('.').replace(/\.\[/g, '[');

      result[newKey] = objectToFlatten[key];
    } else {
      return flatten(objectToFlatten[key], result, [...stackName, key.replace(/\d+/, `[${key}]`)]);
    }
  })

  return result;
}

export default flatten;

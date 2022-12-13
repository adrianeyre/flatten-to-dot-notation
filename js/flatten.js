const flatten = (objectToFlatten, result = {}, stackName = []) => {
  if (typeof objectToFlatten !== 'object') throw Error('input should be an object');

  Object.keys(objectToFlatten).forEach(key => {
    if (typeof objectToFlatten[key] !== 'object') {  
      const newKey = [...stackName, key].join('.').replace(/\.\[/g, '[');

      result[newKey] = objectToFlatten[key];
    } else {
      return flatten(objectToFlatten[key], result, [...stackName, key.replace(/\d+/, `[${key}]`)]);
    }
  })

  return result;
}

module.exports = flatten;

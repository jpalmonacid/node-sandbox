class ConstructorError extends Error {
  constructor(...params) {
    super(...params);
    this.name = 'ConstructorError';
  }
}

class SimpleExtensionError extends Error {
}

try {
  // throw new ConstructorError('This a ConstructorError');
  throw new SimpleExtensionError('This a SimpleExtensionError');
} catch (e) {
  console.log(e, e instanceof SimpleExtensionError);
}

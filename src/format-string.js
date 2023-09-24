const formatStr = (name) => {
  if (typeof name !== 'string') {
    throw new Error('formatStr only accepts a string value');
  }

  return `Hello ${name}!`;
};

module.exports = formatStr;

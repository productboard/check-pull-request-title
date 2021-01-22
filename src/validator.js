const isValid = ({ pattern, title }) => {
  const regex = new RegExp(pattern);

  return regex.test(title);
};

module.exports = { isValid };

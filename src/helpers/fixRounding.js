const fixRounding = (value1, value2) => {
  return Math.round(value1 * value2 * 100) / 100;
};

export default fixRounding;
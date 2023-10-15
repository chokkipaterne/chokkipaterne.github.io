export const replaceChar = (str, search, replace = 'b') => {
  let count = 0;
  return str
    .split(search)
    .map((char) => {
      count++;
      return count % 2 === 1
        ? char + '<' + replace + '>'
        : char + '</' + replace + '>';
    })
    .join('');
};

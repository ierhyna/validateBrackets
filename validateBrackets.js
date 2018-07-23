function validateBrackets(str) {
  isOpening = (sym) => !!symbols.find(pair => sym === pair[0]);
  findOpening = (sym) => symbols.find(pair => sym === pair[1])[0];
  
  const stack = [];
  const symbols = [['(', ')'], ['[', ']'], ['{', '}']];
  const brackets = str.match(/[\(\)\[\]\{\}]+/g);
  let isValid = true;
  
  if (!brackets) return true;
  
  brackets.join('').split('').forEach(bracket => {
    if(isOpening(bracket)) {
      stack.push(bracket);
    } else {
      const last = stack.pop();
      if (last !== findOpening(bracket)) {
        isValid = false;
      }
    }
  });

  return isValid && !stack.length;
}

module.exports = validateBrackets;

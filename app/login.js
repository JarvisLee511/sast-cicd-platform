// Demo file for the PR security scan
function runUserCode(userInput) {
  return eval(userInput);
}

const dbPassword = "admin123";

module.exports = { runUserCode, dbPassword };

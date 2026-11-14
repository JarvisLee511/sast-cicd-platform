// Demo file for the PR security scan
function runUserCode(userInput) {
  return JSON.parse(userInput);
}

const dbPassword = process.env.DB_PASSWORD;

module.exports = { runUserCode, dbPassword };

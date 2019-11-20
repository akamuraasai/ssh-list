const fs = require('fs');

module.exports = (tag = '') => {
  const home = process.env.HOME;
  const file = fs.readFileSync(`${home}/.ssh/config`, 'utf8');
  return file
    .match(/^Host (.{1,})/gm)
    .map((str) => str.replace('Host ', ''))
    .filter((str) => str.startsWith(tag));
};

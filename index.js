const yamljs = require('yamljs');
const getUserHome = () => process.env.HOME || process.env.USERPROFILE;

/*
  Fish history (~/.local/share/fish/fish_history) is in YAML format.
  Parsed to JS object it looks like:

  [{
    cmd: './some-command',
    when: 123123123
  }, ...]


  Zsh history looks like:
  : 1482183081:0;git clone https://github.com/powerline/fonts.git
 */

function unescape(cmd) {
  // zsh always wants a backslash before a newline, but in fish it's optional
  return cmd
    .toString()
    .replace(/(\\\\)?\\[n\\]/g, (m) => (m === '\\\\' ? '\\' : '\\\n'));
}

const zshHistory = yamljs
  .load(getUserHome() + '/.local/share/fish/fish_history')
  .filter(entry => entry.cmd)
  .map(entry => `: ${entry.when}:0;${unescape(entry.cmd)}`)
  .join('\n');


// log to stdout to append the converted fish history to ~/.zsh_history
console.log(zshHistory);

## Fish shell history ==> Zsh history

Migrating from Fish shell to Zsh? Need your history?
Just convert it to the correct format.

Clone it, install NPM dependencies (`nvm use && npm i`) and...
```
node index.js >> ~/.zsh_history
```

to append it to your `.zsh_history`.

or run a docker container
```
docker build -t fish-history-to-zsh .
docker run --rm -v $HOME/.local/share/fish/fish_history:/root/.local/share/fish/fish_history fish-history-to-zsh >> ~/.zsh_history
```

Have fun!

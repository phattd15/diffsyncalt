# Diffsyncalt

This project is a PoC realtime collaborative editor using the "diff-match-patch" algorithm by Neil Fraser and the modified version of differential synchronization.

Built with Socket.io, Vue.js, Node.js.

The core of the project can be found [here](https://github.com/polarity-cf/diffsyncalter).

## How to use ?

Enter a string as the room name and a string as your name. Then, call for more people to join the same room. After that you can start editing the text. You can also set the "package loss" attribute to test when the package are loss, the server can still maintain the text in the following iterations.

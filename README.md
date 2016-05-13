web-servo
==========

This is a baby web server for a Tessel 2 that hooks up a button to a servo. Heavily inspired by [this demo
](https://github.com/HipsterBrown/tessel-router).

### Setup

1. If your tessel isn't set up, [do that](https://tessel.github.io/t2-start/index.html)

1. Setup an [access point](https://tessel.github.io/t2-start/ap.html) and join it:

 ```
t2 ap -n ItsMeTessel
```
1. Install and run:

```
npm i && t2 run webserver.js
```

1. Check out http://192.168.1.101:8080/

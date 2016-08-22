# soundcloud-mini

This a tiny soundcloud API. Why?

Well when I was making [vertexshaderart](http://vertexshaderart.com) I had 2 issues

1. [the 3.0 SDK doesn't work in Safari](http://stackoverflow.com/questions/33431256/soundclouds-2-0-sdk-works-but-3-0-does-not-as-of-oct-29th-2015)
2. the 2.0 SDK uses flash (or at least initializes it - shows up in URL bar on Chrome)

So, wrote my own replacement. It just supports `SC.initialize`
and `SC.get`. That's it

[See example here](https://greggman.github.io/soundcloud-mini/).

## Building

1. `git clone`
2. `npm install`
3. `npm build`



# sparkle.js
The Vanilla JS Sparkle Solution

## Introduction
Please visit the product page served at https://efkah.github.io/sparkle.js/.

It's just a copy of `static/index.html`, so dont expect too much.

## Contribute
You will need to `npm install` and `webpack` for development. 

I preferr to use a container:

```bash
docker run --rm -it -v ${PWD}:/app jmfirth/webpack bash
```

Once your on the shell, try this:

```bash
  npm install
  npm link webpack
  webpack
```

And that's it!

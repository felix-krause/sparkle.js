# sparkle.js
An animation based sparkling idea

## User Information
Use the contents of the `dist` folder and add them to your project. Easy as Pi!

### Setup
Select an `HTMLElement` or `NodeList` Element and `sparkle()` it.

```javascript
document.querySelector("#element").sparkle();
document.querySelectorAll(".element").sparkle();
```
### Examples

 * [Sparkle with Custom Properties](https://jsfiddle.net/gh/get/library/pure/efkah/sparkle.js/tree/master/demo/sparkle-custom-properties)
 * [Basic HTMLElement sparkling](https://jsfiddle.net/gh/get/library/pure/efkah/sparkle.js/tree/master/demo/htmlelement-sparkle)
 * [Basic Nodelist Sparkling](https://jsfiddle.net/gh/get/library/pure/efkah/sparkle.js/tree/master/demo/nodelist-sparkle)
 * [Sparkle with text contents](https://jsfiddle.net/gh/get/library/pure/efkah/sparkle.js/tree/master/demo/sparkle-text)
 * [Sparkle with self defined HTMLElement](https://jsfiddle.net/gh/get/library/pure/efkah/sparkle.js/tree/master/demo/sparkle-html)

### Properties
There are various Setup Option to use for sparkling:

| Option   | Description |
| -------- | ----------- |
| position | `string` states where the overlay should be positioned. Possible Values: `afterbegin`, `beforeend`, `beforebegin`, `afterend` |
| count    | `float`describes how many stars should be added. |
| size   | `{ width: string, height: string }`sets width and height in css grammar |
| minAge   | `float`to declare the minimum lifetime of a star in ms |
| maxAge   | `float`to decloare the maximum lifetime of a star in ms |
| starsource   | `string`, `HTML`or `HTMLElement`to use as the source of the sparkling stars. |

The Default Setup runs as follows:

```javascript
document.getElementById("default-setup").sparkle({
  position: "beforeend",
  count: 3,
  size: {
    width: "15px",
    height: "15px"
  },
  minAge: 2000,
  maxAge: 5000,
  starsource: `
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 15 15" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" x
      mlns:xlink="http://www.w3.org/1999/xlink" 
      xml:space="preserve" 
      xmlns:serif="http://www.serif.com/" 
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <path d="M1.125,4.95l4.462,0l1.913,-3.825l0.637,3.825l5.738,0l-4.463,3.188l0.638,5.737l-3.187,-3.825l-4.463,3.825l1.913,-5.737l-3.188,-3.188Z" 
        style="fill:#fff;">
        </path>
      </svg>`
});
```

## Developer Information
You will need to `npm install` and `webpack` for development. If you are familiar with those, there is no need to read on.

### Building...
For easy setup, use a container. I found `jmfirth/webpack` to be good enough (but old):

```bash
docker run --rm -it -v ${PWD}:/app jmfirth/webpack /bin/bash
```

Once your on the shell, try this:

```bash
  npm install
  npm link webpack
  webpack
```

*Done!* Well, that is, if all you wanna do is build. 

### Serving...
I prefer using `live-server` running on my local machine. To do the magic, run the docker container with:

```bash
docker run --rm -it -v ${PWD}:/app jmfirth/webpack webpack --watch
```

You can also use `webpack-dev-server` inside the container, if you add route `-p 8080:8080`, run `webpack --watch &` (send to background) and `webpack-dev-server --host 0.0.0.0`. 

The test site will be available at `http://127.0.0.1:8080/static/`.
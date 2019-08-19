---
title: "How to Create a Node.js Server With Express"
author: Kyrell Dixon
slug: react-from-scratch-react-16-7-webpack-4-babel-7-tutorial
category: javascript
excerpt: This is a completely beginner friendly tutorial on how to create a web server with Node.js using the Express framework.
hero: ./images/hero.jpg
date: 2019-08-18
---

This is a completely beginner friendly tutorial on how to create a web server with Node.js using the Express framework.

## Understanding the Terms

It is far too easy to just copy-paste some code examples to get something running without ever really knowing what the code is doing.
To prevent that, I am going to briefly define a few important terms and concepts to potentially help fill some conceptual gaps.

- **REST or RESTful Architecture**: REpresentational State Transfer or REST is a standardized way to design a code base for easy communication between a client and server.
- **Client**: Sends requests (think GET, POST, and DELETE for example) to the server. The client is often confused with the "front end" of an application, but there are distinct differences. *Anything* that sends requests is a client and that includes a server, bash script, a website.
- **Server**: Responds to requests from a client. A response can be many things, but the most common response from an API is a JSON file.
- **JSON**: JavaScript Object Notation is a standard way of formatting data that uses syntax from JavaScript.
- **API (Application Programming Interface)**: Code that allows a client to interact with a server.

As you go through this tutorial, you will see more practical examples of these terms.

## Set up your project

To get started, create and change into a folder for your project.

```bash
mkdir express-tutorial && cd $_
```

Here we used `$_` which is an alias for the input of the last command. The input for the `mkdir` command is `express-tutorial`, so `cd $_` translates to `cd express-tutorial`.

**Pro-tip:** I am using `git` for version control with my folder, so I also did a `git init` at this point. For the sake of simplicity, I'm going to leave `git` out of this tutorial, but in an actual project now is is a good time to start tracking your changes.

From here we want to create a `package.json` file that will keep track of our project dependencies and allow us to do some cool things later on. To do that run:

```bash
npm init -y
```

This will create a `package.json` file and answer "yes" to all the questions because of the `-y` flag.

If you check out your `package.json` file, it should look similar to this:

```json
{
  "name": "express-tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Kyrell Dixon",
  "license": "MIT"
}
```

If your `package.json` is not exactly the same, that is perfectly fine. You can add in the fields you want to make it match, but I will point out which fields you need to look out for as this file changes.

The last thing we need to get set up for now is adding in the Express framework. Express is the Node.js framework we will use to create the actual API endpoints, so we will need to install that package. To do that use:

```bash
npm i express
```

Here `npm i` is short for `npm install` because the less letters you type, the less of a risk for carpal tunnel (and because the best developers are lazy EMOJI).

Running this command will add a few new files:

```bash
.
├── node_modules #new
├── package-lock.json #new
└── package.json
```

**Pro-tip**: To get this to display I used a command called `tree`. [This](https://askubuntu.com/questions/431251/how-to-print-the-directory-tree-in-terminal) link will help you get it for MacOS and Ubuntu.

The `node_modules` folder is where the Express framework code lives as well as all its dependencies. If you're using git, you want to make sure that you **never** commit this folder unless absolutely necessary because it is *massive*.

**Pro-tip:** Check out [`npkill`](https://medium.com/better-programming/npkill-the-easy-solution-to-deleting-node-modules-with-style-1c591126f7a5) if you want a way of easily removing node_modules from unused projects on your computer.

The `package-lock.json` file is automatically generated primarily as a way of keeping track of your project dependcies, but it serves multiple purposes. For more information, check out the npm documentation's [description of this file](https://docs.npmjs.com/files/package-lock.json).

With that, we have all the initial setup done. for the project. Now we can get into creating the server

## Creating the Initial Server

First we want to create a file to store our main server code:

```bash
touch index.js
```

It is pretty standard to use an `index.js` as the root file since this communicates to other developers that this is where your application starts from.

However, if this is just a personal project that only you will see, feel free to have fun and name it what you want. It does not actually matter what you call the file.

From here you want to take whatever you name the file and type out:

```javascript
const express = require("express");

const app = express();

app.listen(1234, () => {
  console.log("Server is listening on port: 1234");
});
```

So what's going on here?

Line 1 takes care of importing the express package that you installed earlier into your server file.

Line 3 calls the express function which returns an express application.

Lines 5-7 tells your application to listen for any requests that come in on port 1234. For now you can think of a port as a more specific address for a url similar to a street number.

To test out the code, go back to the command line and run:

```bash
node index.js # or node your-filename.js
```

If you've followed every step until now, you should see a message in your terminal saying:

```bash
Server is listening on port: 1234
```

This message says the local

If you don't, try to debug it! If you're getting some type of error message, try to decipher it yourself or just copy and paste it straight into Google.

If all else fails, reach out and I or someone else in the community will gladly help.

Once everything is working, you are almost ready to create some API endpoints! Well, *almost* ready. First we want to do a quick refactoring of the port.

## Refactoring Port

As a quick refactoring, we're going to move the port to it's own variable like so:

```javascript
const express = require("express");

const PORT = 1234;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
```

This gets rid of what developers call a "magic number." A magic number is simply a number without a label. In this case, if we didn't explicitly save `1234` in the `PORT` constant, anyone reading the code would have no idea what that number was there for.

Another subtle benefit is that we can now reuse the PORT variable in the `console.log` so that if we change the PORT, we only have to change it in one place.

Simple refactors like this help you have clean code that is easy to understand and work with.

With that out of the way, we can get into creating the API endpoints.

## Creating REST API Endpoints

The first endpoint we'll create will handle a GET request.

```diff
const express = require("express");

const PORT = 1234;
const app = express();

+app.get("/hello", (req, res) => {
+  res.send("Hello world");
+});
+
 app.listen(PORT, () => {
   console.log(`Server is listening on port: ${PORT}`);
 });
```

Let's break this down.

First we have `app.get("/hello", ...)` which tells the server that we want to be able to handle a GET request to the `/hello` endpoint.

Following the endpoint is `(req, res) => {...}` which is an ES6 [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) that takes two parameters `req` and `res`.

The first parameter `req` is a variable that stores all the information for the incoming `req`uest from the client. The server `res`ponse functions are stored in the `res` parameter.

In this case we are using `res.send` to respond with the string `"Hello world"`.

So after getting the server up and running how do you test it out? I'm going to cover three ways to test out the api endpoint without having to write a line of code.

## Testing the API endpoint

To test out the `"/hello"` endpoint, we want to send a GET request to the full server url at `localhost:1234/hello`.

We are using `localhost` since we are running the server locally and `:1234` since that is the port the server is listening on.

The first way to test this out will be in the browser!

### In the browser

Pop open Chrome, Firefox, Safari, or whatever browser you're comfortable with.

Just please, **PLEASE** don't use Internet Explorer. Microsoft, it's creator, [doesn't even want you to](https://www.theverge.com/2019/2/8/18216767/microsoft-internet-explorer-warning-compatibility-solution).

If you're getting an error, make sure to restart your server with `ctrl+c` followed by a `node index.js`. (I'll show you a way to avoid errors from forgetting to restart your server a little later.)

Your browser should look like:

![Hello world endpoint in browser](./images/hello-endpoint.jpg)

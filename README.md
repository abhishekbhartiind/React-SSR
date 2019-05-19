### React Server Side Rendering

Server-side rendering (SSR) is a popular technique for rendering a normally client-side only single page app (SPA) on the server and then sending a fully rendered page to the client. The client’s JavaScript bundle can then take over and the SPA can operate as normal. One major benefit of using SSR is in having an app that can be crawled for its content even for crawlers that don’t execute JavaScript code.

SSR can also often help with performance because a fully loaded app is sent down from the server on the first request.

=============================================

we’ll use ReactDOM’s hydrate method instead of render to indicate to the DOM renderer that we’re rehydrating the app after a server-side render

```
ReactDOM.hydrate(<App />, document.getElementById('root'));

```

 we can import our app component from the client app directly from the server. 

- We tell Express to serve contents from the build directory as static files.
- We use a method from ReactDOMServer, renderToString, to render our app to a static HTML string.
- We then read the static index.html file from the built client app, inject our app’s static content in the div with a root id and send that as the response to the request.

###### Configure Webpack and babel

```
yarn add webpack webpack-cli babel-core babel-loader babel-preset-env babel-preset-react-app nodemon webpack-node-externals npm-run-all --dev

```

The StaticRouter component expects a location and a context prop. We pass the current url (Express’ req.url) to the location prop and an empty object to the context prop. The context object is useful to store information about a specific route render, and that information is then made available to the component in the form of a staticContext prop.
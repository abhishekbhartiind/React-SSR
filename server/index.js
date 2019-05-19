import path from 'path';
import fs  from 'fs'
import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import { matchRoutes } from 'react-router-config';

import serialize from 'serialize-javascript';

import App from '../src/App'
import Routes from '../src/routes';

const PORT = process.env.PORT;
const app = express()

app.use(express.static('./build'))

app.get('/*', (req, res) => {
    const matchingRoutes = matchRoutes(Routes, req.url);
    let promise = [];

    matchingRoutes.forEach(route => {
        if (route.loadData) {
          promises.push(route.loadData());
        }
    });

    Promise.all(promises).then(dataArr => {
        console.log("data" , dataArr)
        // Let's add the data to the context
        const app = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        );
    
        const indexFile = path.resolve('./build/index.html')
        fs.readFile(indexFile, 'utf8', (err, indexData) => {
            if (err) {
                console.error('Something went wrong:', err);
                return res.status(500).send('Oops, better luck next time!');
            }
    
            if(context.status === 404){
                res.status(404)
            }
            if (context.url) {
                return res.redirect(301, context.url);
            }
            
            return res.send(
                indexData
                .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
                .replace(
                    '</body>',
                    `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script>`
                )
            );
        });
    })
})

app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});
const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()

// Creating express server
const app = express();

const PORT = 3082;
const HOST = "localhost";
const API_URL = process.env.API_URL;
//const API_KEY_VALUE = process.env.API_KEY_VALUE;

app.use('/matchinput', createProxyMiddleware({
    target: API_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/matchinput`]: '',
    },
}));

app.listen(PORT, HOST, () => { 
    console.log(`Starting Proxy at ${HOST}:${PORT}`); 
});
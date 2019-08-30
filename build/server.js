'use strict';

//  server.js
var express = require('express');

// import express from 'express';

var app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get('/', function(req, res) {
    return res.status(200).send({ 'message': 'Welcome to my first API created with love!' });
});

app.listen(4000);

console.log('running app  on port', 4000);


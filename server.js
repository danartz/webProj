const express = require('express');
const app = express();
app.use(express.static('public'));
app.list(3000, function() {
    console.log('App started on port 3000');
});

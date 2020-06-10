import path from 'path';
import express from 'express';

const port = process.env.PORT || 5001;
express()
    .use(express.static(path.join(__dirname, '/../../static')))
    .use(express.json())
    // Serve the static file index.html for any path that doesn't
    // start with /api/.
    .get(/^\/(?!api\/).*/, function(
        req, res) {
      res.sendFile(path.join(__dirname, '/../../static', 'index.html'));
    })
    .listen(port);

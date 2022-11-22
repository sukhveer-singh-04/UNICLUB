const express = require("express");

const imageRouter = express.Router();

imageRouter.get('/:imagePath', async (req, res) => {
  return req.app.locals.dropbox
    .filesDownload({ path: `/files/${req.params.imagePath}` })
    .then((response) => res.send(response.result.fileBinary))
    .catch(() => res.json({ error: 'Image not found' }));
})

module.exports = imageRouter;
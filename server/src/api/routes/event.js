const express = require("express");
const Event = require("../../db/models/Event");

const eventRouter = express.Router();

eventRouter.get('/', (req, res) => {
  Event.find()
    .then(data => res.json({data}))
    .catch(err => res.status(500).json(err))
})

eventRouter.get('/:postId', (req, res) => {
  Event.findById(req.params.postId)
    .then(data => res.json({data}))
    .catch(err => res.status(500).json(err))
})

eventRouter.post('/', async (req, res) => {
  const { title, club } = req.body;
  const { md5, name, data } = req.files.image;
  const { dropbox } = req.app.locals;
  const uploadOptions = getImageUploadOptions(name, md5, data);
  dropbox.filesUpload(uploadOptions).then((response) => {
    if (response.status === 200) {
      const imageURL = `/api/image/${md5}${name}`
      const newEvent = new Event({title, club, imageURL, addedBy: req.session.user.name});
      return newEvent.save()
        .then(data => res.json({message: "Event Added Successfully", _id: data._id}))
        .catch(err => res.status(500).json(err));
    }
    res.json({ status: 'failed' });
  });
})

eventRouter.put('/:postId', async (req, res) => {
  Event.findByIdAndUpdate(req.params.postId, req.body)
    .then(data => res.json({message: "Event Updated Successfully", _id: data._id}))
    .catch(err => res.status(500).json(err))
})

eventRouter.delete('/:postId', (req, res) => {
  Event.findByIdAndDelete(req.params.postId)
    .then(data => res.json({message: "Event Deleted Successfully", _id: data._id}))
    .catch(err => res.status(500).json(err))
})

const getImageUploadOptions = (name, md5, data) => ({
  path: `/files/${md5}${name}`,
  contents: data,
  mode: 'overwrite',
});

module.exports = eventRouter;
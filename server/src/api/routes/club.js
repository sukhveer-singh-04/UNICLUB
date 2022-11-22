const express = require("express");
const Event = require("../../db/models/Event");
const Club = require("../../db/models/Club");

const clubRouter = express.Router();

clubRouter.get('/', (req, res) => {
  Club.find()
    .then(data => res.json({data}))
    .catch(err => res.status(500).json(err))
})

clubRouter.get('/:clubName', (req, res) => {
  Club.findOne({name: req.params.clubName})
    .then(data => res.json({data}))
    .catch(err => res.status(500).json(err))
})

clubRouter.get('/:clubName/event', (req, res) => {
  Event.find({club: req.params.clubName})
    .then(data => res.json({data}))
    .catch(err => res.status(500).json(err))
})

module.exports = clubRouter;
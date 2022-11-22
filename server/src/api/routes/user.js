const express = require("express");

const Admin = require("../../db/models/Admin");
const President = require("../../db/models/President");

const userRouter = express.Router();

userRouter.get('/self', async(req, res) => {
  if(req?.session?.user?.type === 'admin'){
    return Admin.findOne({email: req.session.user.email})
      .then(data => res.json({id: data._id, type: 'admin', email: data.email, name: data.name, isAuth: true}))
      .catch(err => res.status(500).json(err))
  }
  else if(req?.session?.user?.type === 'president') {
    return President.findOne({email: req.session.user.email})
      .then(data => res.json({id: data._id, type: 'president', email: data.email, name: data.name, club: data.club, isAuth: true}))
      .catch(err => res.status(500).json(err))
  }
  return res.json({isAuth: false});
});

module.exports = userRouter;
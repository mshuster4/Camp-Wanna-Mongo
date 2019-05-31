const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Player
      .find(req.query)
      .sort({ points: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Player
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Player
      .findOneAndUpdate({_id:req.params.id}, {$inc: {rank: 1}}, {new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

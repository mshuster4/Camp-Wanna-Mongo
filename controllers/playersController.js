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
      .findOneAndUpdate({_id:req.params.id}, function(err, player) {
        player.setNext("rank", function(err, user) {
          if (err) console.log("didn't work because", err);
        });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

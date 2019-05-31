const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGOD_URL ||
    "mongodb://localhost/campwannagetajob"
);

const playerSeed = [
    {
        rank: 1,
        username: "playerOne",
        points: 1
    },
    {
        rank: 2,
        username: "playerTwo",
        points: 1
    }

];

db.Player
  .remove({})
  .then(() => db.Player.collection.insertMany(playerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});

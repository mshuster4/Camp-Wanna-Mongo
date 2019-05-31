const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGOD_URL ||
    "mongodb://localhost/campwannagetajob"
);

const playerSeed = [
    {
        username: "playerOne",
        points: 3
    },
    {
        username: "playerTwo",
        points: 2
    },
    {
        username: "playerThree",
        points: 1

    },
    {
        userName: "playerFour",
        points: 5
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

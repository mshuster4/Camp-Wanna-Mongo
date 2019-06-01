const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGOD_URL ||
    "mongodb://localhost/campwannagetajob"
);

const playerSeed = [
    {
        username: "playerOne",
        mathPoints: 3,
        overallPoints: 80
    },
    {
        username: "playerTwo",
        mathPoints: 2,
        overallPoints: 33
    },
    {
        username: "playerThree",
        mathPoints: 4,
        overallPoints: 120

    },
    {
        userName: "playerFour",
        mathPoints: 0,
        overallPoints: 0
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

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
        overallPoints: 80,
        memoryPoints: 3,
        minesPoints: 3,
        triviaPoints: 1
    },
    {
        username: "playerTwo",
        mathPoints: 2,
        overallPoints: 33,
        memoryPoints: 4,
        minesPoints: 3,
        triviaPoints: 1
    },
    {
        username: "playerThree",
        mathPoints: 4,
        overallPoints: 120,
        memoryPoints: 2,
        minesPoints: 3,
        triviaPoints: 1

    },
    {
        username: "playerFour",
        mathPoints: 1,
        overallPoints: 1,
        memoryPoints: 1,
        minesPoints: 3,
        triviaPoints: 1
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

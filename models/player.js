const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    rank : {type: Number},
    username: {type: String}, 
    points: {type: Number}
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    rank: {type: Number, default: 0},
    username: {type: String, required: true, default: "Guest"}, 
    points: {type: Number}
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;

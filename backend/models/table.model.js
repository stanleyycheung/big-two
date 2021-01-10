const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tableSchema = new Schema({
	player1: { type: String, required: true },
	player2: { type: String, required: true },
	player3: { type: String, required: true },
	player4: { type: String, required: true },
	description: { type: String, required: true },
	date: { type: Date, required: true },
}, {
	timestamps: true,
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
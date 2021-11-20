const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	event: 'ready',
	once: true,
	run: async (message, client) => {
		console.log('The NVIDIA drivers have loaded successfully');
	},
};
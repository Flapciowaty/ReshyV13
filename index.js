const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./events/', (err, files) => {
	const eventHandler = require('./handler/eventHandler.js');
	eventHandler(err, files, client);
});
fs.readdir('./commands/', (err, files) => {
	const commandHandler = require('./handler/commandHandler.js');
	commandHandler(err, files, client);
});

client.on("ready", () => {
	client.channels.cache.get(`911691396870717491`).send(`Komputer został włączony`)
});

client.login('OTExNjg5MzEwMDI0MTI2NDg0.YZlC1Q.5lA3rFyXhxi4nw70PWbBL62gA6s');
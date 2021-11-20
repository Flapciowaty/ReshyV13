const { exec } = require("child_process");


module.exports = {
	name: 'cmd',
	description: 'Wykonaj komende w CMD',
	aliases: [],
	usage: '',
	guildOnly: false,
	args: false,
	execute: (message, args, client) => {
        if(!args[0]) return message.channel.send('Wpsiz komende');
        let commandrun = args.slice(0).join(" ");

		exec(commandrun, (error, stdout, stderr) => {
            if (error) {
                message.channel.send('**ERROR**')
                message.channel.send(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                message.channel.send('**ERROR**')
                message.channel.send(`Error: ${stderr}`);
                return;
            }
            message.channel.send('Proces został wykonany i zakończony')
            message.channel.send(`Output: ${stdout}`)
        });
	},
};

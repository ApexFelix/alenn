const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: "Parti! ! ! ! ! ! ! ! ! !",
    url: "",
	file: "https://media.giphy.com/media/3rgXBvnbXtxwaWmhr2/giphy.gif", 
    description: "Kocum Bugun Parti Var KALK KALK OTURMAYA MI GELDIK ! !! ! ! ! ! !",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Parti'],
  permLevel: 0
};

exports.help = {
  name: 'parti',
  description: 'Disko Disko.',
  usage: 'parti'
};

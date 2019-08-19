const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://media.giphy.com/media/C9M0Q2ks5Wt0mErIXe/giphy.gif",
          color: 0xD97634,
		  description: "**:peach: Twerk Vakti !**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'twerk',
  description: 'Twerk Yapar.',
  usage: 'twerk'
};

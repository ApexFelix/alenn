const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://media.giphy.com/media/tpgAJCXrOa6Mo/giphy.gif",
          color: 0xD97634,
		  description: "Ula Johnny Sins Seviliyorsun Reiz <3"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'sinsaga',
  description: 'Johnny Sins Bebeğim.',
  usage: 'sinsaga'
};

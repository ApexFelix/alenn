const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://media.giphy.com/media/dZvWvL38RtgGZ7zN19/giphy.gif",
          color: 0xD97634,
		  description: "SEVILIYORSUN BUNU BILMEN YETERLI ❤"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'baranseviliyorsun',
  description: 'Baran SEVILIYORSUN :heart:.',
  usage: 'baranseviliyorsun'
};

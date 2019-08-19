const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   sb = message.content.substring(5)
         message.channel.send("**Köpeğimi Arıyorum Bir Dakika Bekle ...**").then((msg) =>
				gis('dog').then(function logResults(results) {
					results = results.slice(0, 20)
					img = results[Math.floor(Math.random() * results.length)]
					if (img === undefined) {
						msg.edit("```Hmm... Bişeler Bulamadım Polise Haber Vereyim```")
						return
					}
					msg.edit(img)
				}).catch(function(err) {
					console.log(err);
					msg.edit("```Köpeğim Ölmüş :'( !```")
				}));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'köpek',
  description: 'Köpeğin Hikayesini Anlatır.',
  usage: 'köpek'
};

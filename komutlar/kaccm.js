const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let sonuc = ["``1CM``\n?=>","``2CM``\n?==>","``3CM``\n?===>","``4CM``\n?====>","``5CM``\n?=====>","6CM\n?======>","``7CM``\n?=======>","``8CM``\n?========>","``9CM``\n=========)","``10CM``\n?==========>","``11CM``\n?===========>","``12CM``\n?============>\nKalk�yo Kalk�yo !<a:oy:505793425543528480>...","``13CM``\n?=============>", "``14CM``\n?==============>", "``15CM``\n?=============>\nC�karda Golgesinde Rak� Icek AQ", "``16CM``\n?=============>\nUcak?", "``17CM``\n?=============>\nVay Kurban Olam Oyle Malafata.", "``18CM``\n?=============>\nBu Emaneti G�ren K�z Zevke Doyamaz.", "``19CM``\n?=============>\nKirk Yillik Kampciyim Boyle Cad�r Gormedim AMK", "``20CM``\n?=============>\nKu�a Fazla Yem Verdin Galiba?", "`31000 KM`\n?========================================>\nDusman Gotune :D"];

    let result = Math.floor((Math.random() * sonuc.length));

    let kacembed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setColor('RANDOM')
    .setFooter(`${bot.user.username} `, bot.user.avatarURL)
    .addField("Malafat Iste... Diyecek Laf Yok!", sonuc[result]);
    

    message.channel.send(kacembed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ka�cm', 'kaccm'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ka�cm',
    description: 'kaccm',
    usage: 'ka�cm'
  };
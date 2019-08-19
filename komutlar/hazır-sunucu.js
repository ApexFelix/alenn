const Discord = require('discord.js');
exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin Bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut Girişi').setDescription('Gerekli Dosyalar Kurulsun Mu?').setFooter('Dikkat BOT Yetkileri Düzenleyemediği İçin Mecburen Elinizle Yetkileri Ayarlayacaksınız Yine Bu Eylemi Onaylıyorsan "evet" Yazman Yeterlidir. Bu Eylem 30 Saniye İçinde Sona Erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
       message.guild.createChannel(`『🎓』𝐊𝐚𝐲ı𝐭`);       
       message.guild.createChannel(`╔══════════════╗`,);
       message.guild.createChannel(`『🎓』𝐊𝐮𝐫𝐚𝐥𝐥𝐚𝐫`);
       message.guild.createChannel(`『🔥』𝐃𝐮𝐲𝐮𝐫𝐮`);
       message.guild.createChannel(`『📈』𝐎𝐲𝐥𝐚𝐦𝐚`);
       message.guild.createChannel(`『💎』𝐆𝐞𝐥𝐞𝐧-𝐆𝐢𝐝𝐞𝐧`);
       message.guild.createChannel(`mod-log`);
       message.guild.createChannel(`╚══════════════╝`,);
       message.guild.createChannel(`╔══════════════╗`,);
       message.guild.createChannel(`『👑』𝐂𝐡𝐚𝐭`);         
       message.guild.createChannel(`『🤖』𝐁𝐨𝐭-𝐊𝐨𝐦𝐮𝐭`);
       message.guild.createChannel(`『📷』𝐅𝐨𝐭𝐨𝐠𝐫𝐚𝐟-𝐆𝐢𝐟`);
       message.guild.createChannel(`『👙』𝐧𝐟𝐬𝐰`);
       message.guild.createChannel(`╚══════════════╝`,);
       message.guild.createChannel(`╔𝐒𝐨𝐡𝐛𝐞𝐭-𝐊𝐚𝐧𝐚𝐥𝐥𝐚𝐫ı╗`, 'voice');
       message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ①`, 'voice');
       message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ②`, 'voice');
       message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ③`, 'voice');
       message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ④`, 'voice');
       message.guild.createChannel(`╠ ● ɢeɴel ѕoнвeт ⑤`, 'voice');
       message.guild.createChannel(`╚𝐒𝐨𝐡𝐛𝐞𝐭-𝐊𝐚𝐧𝐚𝐥𝐥𝐚𝐫ı╝`, 'voice');   
       message.guild.createChannel(`╔𝐅𝐚𝐳𝐥𝐚-𝐊𝐚𝐧𝐚𝐥𝐥𝐚𝐫╗`, 'voice');       
       message.guild.createChannel(`  『♫』 Müzik Odası`, 'voice');
       message.guild.createChannel(`       『𝐀 𝐅 𝐊 』`, 'voice');
       message.guild.createChannel(`╚𝐅𝐚𝐳𝐥𝐚-𝐊𝐚𝐧𝐚𝐥𝐥𝐚𝐫╝`, 'voice');       

  



        message.channel.send(`Gerekli Kanalları Oluşturdum. :wink: `);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'hazır-sunucu',
  description: 'Bot İçin Gerekli Kanalları Kurar.',
  usage: '?kurulum'
};
const Discord = require('discord.js');
exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin Bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut Girişi').setDescription('Oluşturduğum Kanallar Silinsin Mi?.').setFooter('Bu Eylemi onaylıyorsan "evet" Yazman Yeterlidir. Bu Eylem 30 Saniye İçinde Sona Erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
       message.guild.deleteChannel(`╔𝐒𝐮𝐧𝐮𝐜𝐮-𝐊𝐚𝐧𝐚𝐥𝐥𝐚𝐫ı╗`,);
       message.guild.deleteChannel(`[🎓]-𝐊𝐚𝐲ı𝐭`);
       message.guild.deleteChannel(`[🎓]-𝐊𝐮𝐫𝐚𝐥𝐥𝐚𝐫`);
       message.guild.deleteChannel(`[🔥]-𝐃𝐮𝐲𝐮𝐫𝐮`);
       message.guild.deleteChannel(`[📈]-𝐎𝐲𝐥𝐚𝐦𝐚`);
       message.guild.deleteChannel(`mod-log`);
       message.guild.deleteChannel(`[💎]-𝐆𝐞𝐥𝐞𝐧-𝐆𝐢𝐝𝐞𝐧`);
       message.guild.deleteChannel(`╚𝐒𝐮𝐧𝐮𝐜𝐮-𝐊𝐚𝐧𝐚𝐥𝐥𝐚𝐫ı╝`,);
       message.guild.deleteChannel(`╔𝐄𝐠𝐥𝐞𝐧𝐜𝐞-𝐊𝐚𝐧𝐚𝐥𝐥𝐚𝐫ı╗`,);
       message.guild.deleteChannel(`[👑]-𝐂𝐡𝐚𝐭`);         
       message.guild.deleteChannel(`[🤖]-𝐁𝐨𝐭-𝐊𝐨𝐦𝐮𝐭`);
       message.guild.deleteChannel(`[📷]-𝐅𝐨𝐭𝐨𝐠𝐫𝐚𝐟-𝐆𝐢𝐟`);
       message.guild.deleteChannel(`[👙]-𝐧𝐟𝐬𝐰`);
       message.guild.deleteChannel(`╚𝐄𝐠𝐥𝐞𝐧𝐜𝐞-𝐊𝐚𝐧𝐚𝐥𝐥𝐚𝐫ı╝`,);
       message.guild.deleteChannel(`╔𝐒𝐨𝐡𝐛𝐞𝐭-𝐊𝐚𝐧𝐚𝐥𝐥𝐚𝐫ı╗`, 'voice');
       message.guild.deleteChannel(`╠ ● ɢeɴel ѕoнвeт ①`, 'voice');
       message.guild.deleteChannel(`╠ ● ɢeɴel ѕoнвeт ②`, 'voice');
       message.guild.deleteChannel(`╠ ● ɢeɴel ѕoнвeт ③`, 'voice');
       message.guild.deleteChannel(`╠ ● ɢeɴel ѕoнвeт ④`, 'voice');
       message.guild.deleteChannel(`╠ ● ɢeɴel ѕoнвeт ⑤`, 'voice');
       message.guild.deleteChannel(`╚𝐒𝐨𝐡𝐛𝐞𝐭-𝐊𝐚𝐧𝐚𝐥𝐥𝐚𝐫ı╝`, 'voice');   
       message.guild.deleteChannel(`╔𝐅𝐚𝐳𝐥𝐚-𝐊𝐚𝐧𝐚𝐥𝐥𝐚𝐫╗`, 'voice');       
       message.guild.deleteChannel(`  ♫ Müzik Odası`, 'voice');
       message.guild.deleteChannel(`  𝐀 𝐅 𝐊 `, 'voice');
       message.guild.deleteChannel(`╚𝐅𝐚𝐳𝐥𝐚-𝐊𝐚𝐧𝐚𝐥𝐥𝐚𝐫╝`, 'voice');       

  



        message.channel.send(`Oluşturduğum Odaları Sildim. :frowning:  `);
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
  name: 'odalarımı-sil',
  description: 'Botun Oluşturduğu Kanalları Siler.',
  usage: '?odalarımı-sil'
};
const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage(' ```Botun Yeniden Başlatılmasına Onay Veriyorsanız 30 Saniye İçinde Evet Yazın.``` ')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`**BOT Yeniden Başlatılıyor...**`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Yeniden Başlatılıyor...`); msg.edit("```BOT Başarıylar Yeniden Başlatıldı```")
    }).catch(console.error)
    })
.catch(() => {
message.channel.sendMessage('**Yeniden Başlatma İşlemi İptal Edildi.**');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly:false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: '[Admin Komutu]',
  usage: 'reboot'
};

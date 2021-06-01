const { MessageEmbed } = require("discord.js");

module.exports = (client, message, queue) => {
    const embed = new MessageEmbed()
    .setDescription(`${client.config.correct} **Music Stopped As I Have Been Disconnected From The Channel**`)
    .setColor(`${client.config.embedcolor}`)

    message.lineReply(embed);
};
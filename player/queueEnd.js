const { MessageEmbed } = require("discord.js");

module.exports = (client, message, queue) => {
    const embed = new MessageEmbed()
    .setDescription('**Music Stopped As There Is No More Music In The Queue**')
    .setColor(`${client.config.embedcolor}`)

    message.lineReply(embed);
};
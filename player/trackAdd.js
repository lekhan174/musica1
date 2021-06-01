const { MessageEmbed } = require("discord.js")

module.exports = (client, message, queue, track) => {
    const embed = new MessageEmbed()
    .setAuthor(`ADDED TO QUEUE`)
    .setColor(`${client.config.embedcolor}`)
    .addField('**Name**', `**${track.title}**`)
    .addField('**Duration**', `**${track.duration}**`)
    .addField('**Requested By**', `**${message.author.tag}**`)
    message.lineReply(embed);
};
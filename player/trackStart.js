const { MessageEmbed } = require("discord.js")

module.exports = (client, message, track) => {
    const embed = new MessageEmbed()
    .setTitle(`NOW PLAYING`)
    .setColor(`${client.config.embedcolor}`)
    .addField('Name', `**${track.title}**`)
    .addField('Duration', `**${track.duration}**`)
    .addField('Requested By', `**${message.author.tag}**`)

    message.lineReply(embed);
};
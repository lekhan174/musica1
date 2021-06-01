const { MessageEmbed } = require("discord.js")

module.exports = (client, message, queue, playlist) => {
    const embed = new MessageEmbed()
    .setTitle(`PLAYLIST ADDED TO QUEUE`)
    .setColor(`${client.config.embedcolor}`)
    .addField('**Playlist Name**', `**${playlist.title}**`) // \n**${playlist.tracks.length} Tracks Has**`)
    .addField('**Playlist Songs**', `**${playlist.tracks.length}**`)
    .addField('**Requested By**', `**${message.author.tag}**`)

    message.lineReply(embed);
};
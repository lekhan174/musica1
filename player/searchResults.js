const { MessageEmbed } = require("discord.js");

module.exports = (client, message, query, tracks) => {
    const embed = new MessageEmbed()
    .setAuthor(`Here are your search results for ${query}`)
    .setColor(`${client.config.embedcolor}`)
    .setDescription(`${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`)

    message.lineReply(embed);
};
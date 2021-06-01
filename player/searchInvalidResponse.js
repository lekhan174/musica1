const { MessageEmbed } = require("discord.js");

module.exports = (client, message, query, tracks, content, collector) => {
    const wrong = new MessageEmbed()
    .setDescription(`**You Must Send A Valid Number Between 1 To ${tracks.length}**`)
    .setColor(`${client.config.embedcolor}`)
    
    if (content === 'cancel') {
        const correct = new MessageEmbed()
        .setDescription('**The Selection Has Been Cancelled**')
        .setColor(`${client.config.embedcolor}`)

        collector.stop();
        return message.lineReply(correct);
    } else message.lineReply(wrong);
};
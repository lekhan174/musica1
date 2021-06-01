const { MessageEmbed } = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

module.exports = {
    name: 'setvc',
    aliases: ['sv'],
    category: ['Owner-Only'],
    utilisation: '{prefix}setvc',

    execute(client, message, args) {
        if(message.author.id != "686607245747945495") {
            return message.lineReply("Only Bot Owner Can Use This Command")
        }

        const guildid = message.guild.id
        db.set(`vc_${guildid}`, message.member.voice.channel.id)

        message.lineReply(`Sucessfully set the 24/7 vc to ${message.member.voice.channel.id}`)
    }
}
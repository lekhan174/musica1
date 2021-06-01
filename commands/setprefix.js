const { MessageEmbed } = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

module.exports = {
    name: 'setprefix',
    aliases: ['sp', 'prefix'],
    category: ['General'],
    utilisation: '{prefix}setpreifx <new prefix>',

    async execute(client, message, args) {

        const noperm = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **You Need ADMINISTRATOR Permission To Use This Command**`)

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            message.lineReply(noperm)
            return
        }

// -----------------------------------------------------------------------------------------------
        
        const noprefix = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **Please Give The Prefix That You Want To Set**`)

        if(!args[0]) {
            message.lineReply(noprefix)
            return
        }

// -----------------------------------------------------------------------------------------------
        
        const args2 = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **You Cannot Use Double Arguments In The Bot Prefix**`)

        if(args[1]) {
            message.lineReply(args2)
            return
        }

// -----------------------------------------------------------------------------------------------

        const characters3 = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **You Cannot Set The Prefix More Than 3 Characters**`)

        if(args[0].length > 3) {
            message.lineReply(characters3)
            return
        }

// -----------------------------------------------------------------------------------------------

        const reseted = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.correct} **Reseted Prefix**`)

        if(args.join("") === client.config.default_prefix) {
            db.delete(`prefix_${message.guild.id}`)
            await message.lineReply(reseted)
        }

// -----------------------------------------------------------------------------------------------

        const seted = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.correct} **Seted The Bot Prefix To** \`${args[0]}\``)

        db.set(`prefix_${message.guild.id}`, args[0])
        await message.lineReply(seted)

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **setprefix** command`)
    }
}
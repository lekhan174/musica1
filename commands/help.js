const { MessageEmbed } = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: ['General'],
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if(prefix === null) prefix = client.config.default_prefix;

// -----------------------------------------------------------------------------------------------

        if (!args[0]) {
            const general = message.client.commands.filter(x => x.category == 'General').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            const owner = message.client.commands.filter(x => x.category == 'Owner-Only').map((x) => '`' + x.name + '`').join(', ');

            const embed = new MessageEmbed()
            .setColor(`${client.config.embedcolor}`)
            .setAuthor("Commands List of Lyrical", `${client.user.avatarURL()}`)
            .setDescription(`**To get info of each command you can do ${prefix}help [command]**`)
            .addField('🔰 **General Commands**', general)
            .addField('🎶 **Music Commands**', music)
            .addField('👑 **Owner-Only Commands**', owner)

            message.lineReply(embed);

// -----------------------------------------------------------------------------------------------
        } else {

            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            const nocommand = new MessageEmbed()
            .setColor(`${client.config.embedcolor}`)
            .setDescription(`${client.config.incorrect} **I Did Not find This Command**`)

            if (!command) {
                message.lineReply(nocommand)
                return
            }

// -----------------------------------------------------------------------------------------------

            const ebed = new MessageEmbed()
            .setColor(`${client.config.embedcolor}`)
            .setAuthor("Help Panel", `${client.user.avatarURL()}`)
            .addField("Name", command.name, true)
            .addField("Category", command.category, true)
            .addField("Aliases", command.aliases.length < 1 ? 'None' : command.aliases.join(', '), true)
            .addField("Usage", `\`${command.utilisation.replace('{prefix}', prefix)}\``, true)

            message.lineReply(ebed);
        };

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **help** command`)
    }
};
  
const { version } = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'stats',
    aliases: [],
    category: 'General',
    utilisation: '{prefix}stats',

    execute(client, message) {
        
        let servers_count = message.client.guilds.cache.size;
        var myarray = [];
        message.client.guilds.cache.keyArray().forEach(async function(item, index) {
            
        let guildMember = message.client.guilds.cache.get(item).memberCount;
        myarray.push(guildMember)
        })
        let sum = myarray.reduce(function (a, b) {
        return a + b
        });

        let days = Math.floor(client.uptime / 86400000 );
        let hours = Math.floor(client.uptime / 3600000 ) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        const uptime = `\`\`\`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds\`\`\``;
        const servers = client.guilds.cache.size
        const ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)


            const embed = new MessageEmbed()

            .setTitle(`${client.user.username} Stats`)
            .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=3435585`)
            .setColor(`${client.config.embedcolor}`)
            .setDescription(`Hey My Name is **${client.user.username}** and My Work is to play Music`)
            .setAuthor(`${client.user.username}`, `${client.user.avatarURL()}`)
            .addField("<:822824883909951529:849044417553367070> Servers:", `\`\`\`${servers}\`\`\``, true)
            .addField("<a:782167252299546644:849031302187188225> Users:", `\`\`\`${sum}\`\`\``, true)
            .addField("<a:822825199262629918:849044422746046484> Uptime:", `${uptime}`)
            .addField("<:minidisc_1f4bd:849045342094884954> Ram:", `\`\`\`${ram}MB\`\`\``)
            .addField("<a:836272552204697631:849031301050269706> Bot's Developer:", `Gen Z#5226`)
            message.lineReply(embed)

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **stats** command`)
    }
};

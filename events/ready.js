const { MessageEmbed } = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

require("dotenv").config();

module.exports = async (client, message) => {
  console.log(`[API] Logged in as ${client.user.username},
${client.user.username} is now Online`);

  const embed  = new MessageEmbed()
  .setDescription(`**[API] Logged in as ${client.user.username},**
**${client.user.username} is now Online**\n
**Bot Sucessfully Restarted!**`)
  .setColor(`${client.config.embedcolor}`)
  
  client.channels.cache.get(`${client.config.console}`).send(embed)

  const guildids = client.guilds.cache.map((r) => r.id)
        guildids.forEach(guildid => {
            const vcids = db.get(`vc_${guildid}`)
            if(!vcids) return;
            const vc = client.channels.cache.get(vcids)
            if(!vc) return;
            vc.join();
        })
};

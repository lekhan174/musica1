const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

module.exports = (client, message) => {
  if (message.author.bot || message.channel.type === 'dm') return;

  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = client.config.default_prefix;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

  if (cmd) cmd.execute(client, message, args);
};
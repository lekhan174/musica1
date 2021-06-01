require("dotenv").config();
const fs = require("fs");
const { Collection, Client, MessageEmbed, WebhookClient } = require("discord.js");
require('discord-reply');
const { Player } = require("discord-player");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

const client = new Client({
  presence: {
    status: 'online',
    activity: {
      name: '.Help (Gen Z)',
      type: 'LISTENING'
    }
  }
});//Making a discord bot client

client.config = require("./config.js")
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new Collection();
client.player = new Player(client, {
  leaveOnEnd: false,
  leaveOnStop: false,
  leaveOnEmpty: false
});

const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of commands) {
  const command = require(`./commands/${file}`);
  console.log(`Loading command ${file}`);
  client.commands.set(command.name.toLowerCase(), command);
};

for (const file of events) {
  console.log(`Loading discord.js event ${file}`);
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
  console.log(`Loading discord-player event ${file}`);
  const event = require(`./player/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
};

client.on("message", async (message) => {
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = client.config.default_prefix;

    if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
            const embed = new MessageEmbed()
            .setColor(`${client.config.embedcolor}`)
            .setTitle(`About ${client.user.username}`)
            .setThumbnail(client.user.avatarURL())
            .setDescription(`My Prefix Here Is: \`${prefix}\`\nMy Devloper: **Glitch#8393** \n \n You can play music by joining a voice channel and typing\n\`${prefix}play\`. Type \`${prefix}help\` To Get All Commands Help Menu.\n \n [Invite Me](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) | [Support](https://discord.gg/3QuKz5rDJ2)`)
            .setTimestamp();
            return message.channel.send(embed);
        }
})

const webhookClient = new WebhookClient('836177649352048651', 'wNxvsC6y5yIpcrt_1vaFsNdA6wF40KFZXYkvRdGV6io3UsJoL0wjFSfLeOcJ4H3_Lc8-');

process.on("unhandledRejection", (err) => {
    console.log(err);
    webhookClient.send(`\`\`\`${err.stack}\`\`\``);
});

client.login(process.env.TOKEN)

//https://discord.com/api/webhooks/836177649352048651/wNxvsC6y5yIpcrt_1vaFsNdA6wF40KFZXYkvRdGV6io3UsJoL0wjFSfLeOcJ4H3_Lc8-
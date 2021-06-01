module.exports = {
    name: 'ping',
    aliases: [],
    category: 'General',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.lineReply(`Pong! The Bot's latency is **${client.ws.ping}ms**`);

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the ping command`)
    },
};
module.exports = (client, message) => {
    if (message.author.bot) return;
  
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);
    if (message.content.indexOf(client.prefix) !== 0) return;
    if (!cmd) return;
    cmd.run(client, message, args);
  };
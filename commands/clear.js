exports.run = async (client, message, args) => {
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) 
        return message.reply("⚠️ Comando apenas para admins!"); 
    
      let totalDelMsg = parseInt(args[0]);
      let data = new Date();

    if (args[0] < 2 || args[0] > 100) return message.channel.send("🤔 Humm, acho que só posso apagar de 2 à  100 mensagens")
      async function clear() {
          try {
          const fetched = await message.channel.fetchMessages({limit: totalDelMsg});
          message.channel.bulkDelete(fetched);
          message.channel.send(`✔️|| <@${message.author.id}> ${args[0]} mensagens apagadas.`);
          } catch(e) {
              return message.reply("🤔 Algo de errado não está certo!");
          }
      }
      let name = message.member.displayName || 
      message.delete().then(clear())
      .then(console.log(`${message.author.username}#${message.author.discriminator} deletou ${args[0]} mensagens em ${message.guild.name}\n${data.getUTCDate()}/${(data.getUTCMonth() + 1)}/${data.getUTCFullYear()}\n${data.getHours()}:${data.getUTCMinutes()}:${data.getUTCSeconds()}`)
      )}
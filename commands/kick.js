exports.run = (client, message, [mention, ...reason]) => {
    if (!message.member.hasPermissions("KICK_MEMBERS"))
    return message.reply("⚠️ Você não tem este poder!");    

    if (message.mentions.members.size === 0)
      return message.reply("⚠️ Você deve mencionar o usuário a levar Kick");    
  
    if(!client.user.hasPermission("KICK_MEMBERS"))
    return message.reply("Eu não possuo esse poder")
    const kickMember = message.mentions.members.first();
  
    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`✔️ ${member.user.username} Levou um belo de um Kick 👍.`);
    });
  };
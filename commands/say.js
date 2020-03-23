exports.run = async (client, message, args) => {

    message.delete();
    if (!args[0])
      return message.reply("não tens nada a dizer?").then(m => m.delete(5000));
    let date = new Date();
    console.log(
      `"${args}" ==> ${message.member.displayName}, em ${message.guild.name}, ${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
    );
    message.channel.send(args.join(" "));
}
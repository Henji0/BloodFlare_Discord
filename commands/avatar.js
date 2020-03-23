exports.run = async (client, message) => {

    const user = message.mentions.users.first() || message.author;
    let color = message.member.displayHexColor;
    if (color == "#000000") color = message.member.hoistRole.hexColor;
    const avatarEmbed = new Discord.RichEmbed()
        .setColor(color)
        .setTitle("Avatar de: " + user.username)
        .setFooter(
            "Comando solicitado por: " +
            message.author.username +
            "#" +
            message.author.discriminator
        )
        .setImage(user.displayAvatarURL)
        .setDescription(
            `[Clique aqui](${user.displayAvatarURL}) para baixar a imagem`
        );
    message.channel.send(avatarEmbed);
}